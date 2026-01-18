# 🚀 SaaS DevOps Platform on AWS (EKS)

A production-style **SaaS DevOps platform** built using **Docker, Kubernetes (EKS), GitHub Actions, AWS ECR, ALB Ingress, Prometheus & Grafana**.

This project demonstrates **real-world DevOps workflows** including CI/CD, container orchestration, monitoring, and cloud-native deployment.

---

## 🧱 Architecture Overview

- **Microservices**
  - Auth Service
  - User Service
- **Containerization**: Docker
- **Orchestration**: Kubernetes (Amazon EKS)
- **CI/CD**: GitHub Actions
- **Container Registry**: AWS ECR
- **Ingress**: AWS ALB Ingress Controller
- **Monitoring**: Prometheus & Grafana
- **Cloud**: AWS (EC2, EKS, ECR, ALB)

---

## 🔄 CI/CD Pipeline (GitHub Actions)

- Build Docker images
- Push images to AWS ECR
- Deploy services to EKS
- Automatic rollout on every `main` branch push
- Fail-fast checks for missing secrets

---

## ☸️ Kubernetes Components

- Deployments for each microservice
- ClusterIP services
- ALB Ingress for external traffic
- Namespace-based monitoring
- Helm-based monitoring stack

---

## 📊 Monitoring & Observability

Installed using **Helm**:
- Prometheus
- Grafana
- Alertmanager
- Node Exporter
- kube-state-metrics

Grafana dashboards include:
- Cluster resource usage
- Pod & node metrics
- Namespace-level monitoring

---

## 🌐 Live Endpoints

> Deployed on AWS using ALB Ingress

- `/users` → User Service
- `/auth` → Auth Service (Ingress rule-based routing)

---

## 🛠️ Tech Stack

- Docker
- Kubernetes (EKS)
- AWS (EC2, ECR, ALB)
- GitHub Actions
- Helm
- Prometheus
- Grafana
- Linux

---

## 📚 What I Learned

- Designing CI/CD pipelines for Kubernetes
- Debugging real AWS + EKS issues
- Managing cloud costs responsibly
- Production-grade monitoring
- Kubernetes networking & ingress
- Secret management and security best practices

---

## 🧑‍💻 Author

**Varun Goyal**  
Aspiring DevOps Engineer | Cloud | Kubernetes | AWS

📌 Built as a hands-on learning & portfolio project  
⭐ Feel free to star the repo!

