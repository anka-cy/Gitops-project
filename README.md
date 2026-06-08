#  GitOps CI/CD Pipeline (App Repository)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![ArgoCD](https://img.shields.io/badge/ArgoCD-EF7B4D?style=for-the-badge&logo=argo&logoColor=white)

This is the **Application Repository** of a two-part GitOps pipeline. It contains the source code for a Node.js web application and the Continuous Integration (CI) configuration.

> 🔗 **Infrastructure Repository:** The Kubernetes manifests for this application are stored separately in the [Gitops-project-infra](https://github.com/anka-cy/Gitops-project-infra) repository.

---

##  How the Pipeline Works

This project uses a **Two-Repo GitOps Architecture** to cleanly separate application code from infrastructure configuration.

![Two-Repo GitOps Architecture Diagram](./diagram.png)

1. **You Push Code:** Changes to the `main` branch trigger GitHub Actions.
2. **Build & Push:** The pipeline builds a new Docker image, tags it with the Git commit SHA, and pushes it to DockerHub.
3. **Update Infrastructure:** The pipeline then connects to the [Infrastructure Repository](https://github.com/anka-cy/Gitops-project-infra), updates `deployment.yaml` with the new image tag, and commits the change.
4. **Deploy:** ArgoCD (running in the Kubernetes cluster) detects the updated manifest in the infra repo and automatically deploys the new image.


