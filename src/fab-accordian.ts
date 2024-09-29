import { MINUS_ICON, PLUS_ICON } from "./constants";
import { IAccordianData } from "./models";

export class FabAccordian {
    
    render() {
        this.initialize();
    }

    private initialize() {
        const faqAccordianContainer = document.createElement('div');
        faqAccordianContainer.classList.add('acc-container');

        document.body.appendChild(faqAccordianContainer);

        // render header element
        this.renderHeader(faqAccordianContainer);

        const accordianData: IAccordianData[] = [
            {
                id: 1, 
                question: "What is Frontend Mentor, and how will it help me?",
                answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
            },
            {
                id: 2, 
                question: "Is Frontend Mentor free?",
                answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
            },
            {
                id: 3, 
                question: "Can I use Frontend Mentor projects in my portfolio?",
                answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
            },
            {
                id: 4, 
                question: "How can I get help if I'm stuck on a challenge?",
                answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
            },
        ];
        const faqContainer = this.createAccordians(accordianData);
        faqAccordianContainer.appendChild(faqContainer);

    }

    private renderHeader(containerEle: HTMLDivElement) {
        const headerEle = document.createElement('div');
        headerEle.classList.add('acc-header');
        const headerIconEle = document.createElement('span');
        headerIconEle.classList.add('header-icon');

        const headerTitleEle = document.createElement('span');
        headerTitleEle.classList.add('header-title', 'work-sans-700');
        headerTitleEle. textContent = 'FAQs';
        headerEle.append(headerIconEle, headerTitleEle);
        containerEle.appendChild(headerEle);
    }

    private createAccordians(data: IAccordianData[]) {
        const faqContainer = document.createElement('div');
        faqContainer.classList.add('faq-container');

        data.forEach((item: IAccordianData) => {
            const accordianEle = document.createElement('div');
            accordianEle.id = `accordian_${item.id}`;
            accordianEle.classList.add('accordian-container');

            const questionContainer = document.createElement('div');
            questionContainer.classList.add('question-container');
            const questionEle = document.createElement('span');
            questionEle.classList.add('question', 'work-sans-600');
            questionEle.textContent = item.question;

            const iconEle = document.createElement('span');
            iconEle.classList.add('question-icon');
            iconEle.style.backgroundImage = PLUS_ICON;
            questionContainer.append(questionEle, iconEle);

            const answerContainer = document.createElement('div');
            answerContainer.classList.add('answer-container', 'work-sans-400', 'hide')
            answerContainer.textContent = item.answer;
            accordianEle.append(questionContainer, answerContainer);

            faqContainer.appendChild(accordianEle);
            this.wireEventListener(accordianEle);

        });
        return faqContainer
    }

    private wireEventListener(element: HTMLDivElement) {
        const questionContainer = element.querySelector('.question-container') as HTMLDivElement;
        questionContainer.addEventListener('click', (event) => {
            event.stopPropagation();
            const answerContainer = element.querySelector('.answer-container') as HTMLDivElement;
            const iconEle = element.querySelector('.question-icon') as HTMLSpanElement;
            if (answerContainer?.classList.contains('hide')) {
                iconEle.style.backgroundImage = MINUS_ICON;
                answerContainer.classList.remove('hide');
                answerContainer.classList.add('show');
            } else {
                iconEle.style.backgroundImage = PLUS_ICON;
                answerContainer.classList.remove('show');
                answerContainer.classList.add('hide');
            }
        });
    }
}

const fabAcoordianObj = new FabAccordian();
fabAcoordianObj.render();