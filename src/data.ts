import { Code2, Database, Cloud, Wrench, Terminal, Eye, Boxes, Film, Server, HardDrive, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const profile = {
  name: 'Natha Karthikeya',
  headline: 'Software Developer | Cloud Enthusiast | Building Solutions with Python & AWS',
  location: 'Kothagudem, Telangana, India',
  email: 'nathakarthikeya28@gmail.com',
  phone: '+91 7075605572',
  phoneHref: 'tel:+917075605572',
  linkedin: 'https://www.linkedin.com/in/nathakarthikeya/',
  github: 'https://github.com/karthikeya283',
  resumeFile: 'Natha_Karthikeya_Resume.pdf',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: 'Programming', icon: Code2, items: ['Python', 'C', 'C++', 'Verilog', 'VHDL', 'MATLAB'] },
  { title: 'Database', icon: Database, items: ['SQL'] },
  { title: 'Cloud', icon: Cloud, items: ['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS Fundamentals'] },
  { title: 'Development Tools', icon: Wrench, items: ['Git', 'GitHub', 'VS Code'] },
  { title: 'Other', icon: Terminal, items: ['Linux', 'Shell Scripting', 'Operating Systems', 'Computer Networks'] },
]

export interface Project {
  title: string
  icon: LucideIcon
  description: string
  tech: string[]
  features: string[]
  repo?: string // add a real repository URL here to show a GitHub button
}

export const projects: Project[] = [
  {
    title: 'Drowsiness Detection System',
    icon: Eye,
    description: 'A real-time driver drowsiness detection system using computer vision and a CNN-based eye-state classification model.',
    tech: ['Python', 'OpenCV', 'Haar Cascade', 'CNN'],
    features: ['Real-time eye detection', 'Open/closed eye classification', 'Detection of prolonged eye closure', 'Audio alerts for potential drowsiness'],
  },
  {
    title: 'Asset Management System',
    icon: Boxes,
    description: 'A system to track institutional assets such as laboratory equipment, electronics and furniture.',
    tech: ['Python', 'SQL'],
    features: ['Asset tracking', 'Status updates', 'Search functionality', 'Asset lifecycle tracking'],
  },
  {
    title: 'Movie Recommendation System',
    icon: Film,
    description: 'A recommender that analyzes user preferences and item similarities to suggest personalized movies.',
    tech: ['Python'],
    features: ['User preference analysis', 'Item similarity matching', 'Personalized movie suggestions'],
  },
]

export const cloudLearning: { title: string; icon: LucideIcon; text: string }[] = [
  { title: 'Amazon EC2', icon: Server, text: 'Virtual server creation, instance configuration and Apache web server deployment.' },
  { title: 'Amazon S3', icon: HardDrive, text: 'Bucket creation, object storage and bucket policy fundamentals.' },
  { title: 'AWS IAM', icon: ShieldCheck, text: 'Identity and access management fundamentals.' },
]

export const education = [
  { degree: 'B.Tech in Electronics and Communication Engineering', school: 'VNR Vignana Jyothi Institute of Engineering and Technology', years: '2022 – 2026', score: 'CGPA: 8.0' },
  { degree: 'Intermediate (MPC)', school: 'Narayana Junior College', years: '2020 – 2022', score: '98.1%' },
  { degree: 'SSC', school: 'Sri Chaitanya High School', years: '2019 – 2020', score: 'CGPA: 10.0' },
]

export const certifications = [
  { title: 'PCAP: Programming Essentials in Python', issuer: 'Cisco Networking Academy', note: 'Certification' },
  { title: 'Data Visualisation: Empowering Business with Effective Insights', issuer: 'Certificate', note: 'Certification' },
  { title: 'Introduction to Linear Algebra with MATLAB', issuer: 'MathWorks, 2024', note: 'Certification' },
  { title: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', note: 'Course completion (not the AWS Certified Cloud Practitioner exam credential)' },
]

export const achievements = [
  'Student Coordinator of Indo Universe Collaboration for Engineering Education.',
  'Participated in technical events, quizzes and paper presentations during the college fest Convergence.',
]
