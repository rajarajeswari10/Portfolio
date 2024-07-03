import React, { useState, useRef, useEffect } from "react";
import "../styles/Projects.css";

function Projects() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    {
      title: "Parking Management System",
      period: "July 2022 to Nov 2022",
      technology: "Python, Tk GUI toolkit",
      moreInfo:
        "The project aims to develop a application that helps in generating the automated bills to the vehicles based on the duration the vehicle have been parked. If the user gives the details of his/her name, vehicle number, entry time, exit time, by this info we will calculate the parking fee and display the details of vehicle and display the parking fee to be paid.",
      repo: "https://github.com/rajarajeswari10/ParkingManagementSystem",
    },
    {
      title: "Bike Loan Portal",
      period: "Feb 2023 to July 2023",
      technology: "React js, ASP.Net API, MySQL",
      moreInfo:
        "This application is built to help customers to apply bike loans online. While applying for the loan, customers can fill their profile by uploading required documents and basic information. Admin can view all the loans submitted by the customers and admin can either accept or reject the loan.",
      repo: "https://github.com/rajarajeswari10/BikeLoanPortal",
    },
    {
      title: "Fraud Detection using Machine Learning",
      period: "Dec 2022 to April 2023",
      technology: "Python, Machine Learning",
      moreInfo:
        "This project focuses on advanced ML techniques to differentiate fraudulent and legitimate transactions. Conducted an exhaustive comparative analysis of decision trees, Naive Bayes, logistic regression, and multilayer perceptron models.",
      repo: "https://github.com/rajarajeswari10/BlockChainFraudDetection",
    },
    {
      title: "Power Bi Car Sales Analysis",
      period: "August 2023",
      technology: "Microsoft Power Bi(KPI)",
      moreInfo:
        "The car sales dashboard, developed using Power BI, provides real-time insights into sales performance, trends, and key metrics, enabling data-driven decision-making and streamlined operations.",
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentProject(null);
  };

  useEffect(() => {
    if (modalVisible && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalVisible]);

  return (
    <div>
      <h2 className="projectsSectionHeader">Projects</h2>
      <hr className="projectsSectionDivider" />
      <div className="projectsList">
        {projects.map((project, index) => (
          <Project key={index} project={project} openModal={openModal} />
        ))}
      </div>
      {modalVisible && (
        <Modal project={currentProject} onClose={closeModal} ref={modalRef} />
      )}
      <div className="gitDiv">
        <button className="gitButton">
          <a
            href="https://github.com/rajarajeswari10?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my Github profile for more projects
          </a>
        </button>
      </div>
    </div>
  );
}

const Project = ({ project, openModal }) => (
  <div className="myproject">
    <h2>{project.title}</h2>
    <h3>{project.period}</h3>
    <p className="projectTechnology">Technology Stack: {project.technology}</p>
    <button onClick={() => openModal(project)}>More Info</button>
  </div>
);

const Modal = React.forwardRef(({ project, onClose }, ref) => (
  <div className="modalOverlay" onClick={onClose}>
    <div
      className="modalContent"
      onClick={(e) => e.stopPropagation()}
      ref={ref}
    >
      <div className="modalHeader">
        <h2>{project.title}</h2>
        <i className="fas fa-times closeIcon" onClick={onClose}></i>
      </div>
      <h3>{project.period}</h3>
      <p>{project.moreInfo}</p>
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      )}
    </div>
  </div>
));

export default Projects;
