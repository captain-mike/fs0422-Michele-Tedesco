export class Post {
  id: string | undefined;
  title: string;
  content: string;
  slug: string;
  date: Date;
  constructor( title: string, content: string, id?: string){
    this.title = title;
    this.content = content;
    this.slug = '';
    this.date = new Date();
    this.id = id;
  }
}
