import fetch from "unfetch";

const getAllstudents = async () => await fetch("api/students");

export default getAllstudents;
