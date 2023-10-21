import { Component } from '@angular/core';
const IMAGE_BASE_URL: string = "assets/images/";

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss'],
})
export class AboutProjectComponent {

  informationArray: InformationSection[] = [
    {
      position: 1,
      title: "My <span>Own</span> Space project",
      text: "Are you interested about how this project works? ¡Then lets take a look!",
      img: IMAGE_BASE_URL + "thinking-man.jpg",
      imgDescription: "Someone working on the desktop",
      extraClass: ""
    },
    {
      position: 2,
      title: "¡<span>MicroFronted</span> architecture!",
      text: "The utilization of a MicroFrontend architecture in this project allows for the autonomous operation of each component and is particularly beneficial for code maintenance. This project uses Angular framework and module federation for MicroFrontend implementation.",
      img: IMAGE_BASE_URL + "microfront.JPG",
      imgDescription: "MicroFront architecture",
      extraClass: "container__information--animation fade_up"
    },
    {
      position: 1,
      title: "¡<span>Clean architecture</span> implementation!",
      text: "The term clean architecture refers to a software design approach that specializes in quality as well as the maintainability and evolution of the software over time. Each microfront implements three main layers: the domain layer for business models and use cases; the infrastructure layer for external communications with APIs; and the UI layer for interface development.",
      img: IMAGE_BASE_URL + "clean-architecture.png",
      imgDescription: "Clean architecture",
      extraClass: "container__information--animation fade_up"
    },
    {
      position: 2,
      title: "¡<span>AWS</span> deployment!",
      text: "This project was deployed on the AWS infrastructure, using resources like BucketS3 and Route53.",
      img: IMAGE_BASE_URL + "AWS.png",
      imgDescription: "AWS deployment",
      extraClass: "container__information--animation fade_up"
    },
    {
      position: 1,
      title: "¡<span>Serverless</span> for BackEnd!",
      text: "For the backend application, the serverless framework for NodeJS was use, using services like DynamoDB, BucketS3, API Gateway, CloudFormation, and Lambda de AWS.",
      img: IMAGE_BASE_URL + "serverless.png",
      imgDescription: "AWS backend application",
      extraClass: "container__information--animation fade_up"
    }
  ];

  constructor() {
    this.scrollListener();
    this.widthListener();
    this.changeItemsPosition();
  }

  scrollListener() {
    window.addEventListener('scroll', () => {
      const height = window.innerHeight / 1.3;
      let elements = document.querySelectorAll('.fade_up');

      elements.forEach(element => {
        let distance = element.getBoundingClientRect().top;

        element.classList.add('transform_up');
        if (distance <= height) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    })
  }

  widthListener() {
    addEventListener("resize", () => {
      this.changeItemsPosition();
    });
  }

  changeItemsPosition() {
    const widthScreen = window.innerWidth;
    if (widthScreen <= 800) {
      this.informationArray.forEach(elm => {
        elm.position = 1;
      });
    }else {
      this.informationArray.forEach((elm, index) => {
        elm.position = index % 2 === 0 ? 2 : 1;
      });
    }
  }

}

export interface InformationSection {
  position: 1 | 2;
  title: string;
  text: string;
  img: string;
  imgDescription: string;
  extraClass: string;
}
