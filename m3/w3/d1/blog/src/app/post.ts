export class Post {

  id: number | undefined;
  title: string;
  content: string
  slug!: string
  constructor(title: string, content: string){
    this.title = title;
    this.content = content;
  }

  titleToSlug(){
    this.slug = this.title.replace(/ /g,'-').toLowerCase();
  }

}
