export default class Job {
  constructor (title = '', description = '', date = new Date()) {
    this.title = title
    this.description = description
    this.date = date
  }
}
