import {Todo} from "../todo";
import {Injectable} from "@angular/core";

@Injectable()
export class TodoFactory {
  static create(): Todo {
    return {
      title: "This is a very important title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac blandit odio. Aliquam erat volutpat. Nulla sit amet mauris convallis, vulputate ligula et, efficitur odio. Fusce tincidunt maximus ante, nec tristique lectus posuere nec. Cras venenatis dolor eget purus interdum posuere. Aliquam sed tempor massa, vel pharetra quam. Etiam vitae diam luctus, suscipit felis eget, gravida libero. Ut finibus, diam vitae convallis tincidunt, augue magna fermentum ligula, at vehicula magna lacus in est. Integer ante tellus, scelerisque sit amet suscipit in, blandit ac magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id iaculis diam, quis congue purus. Vivamus placerat accumsan ullamcorper. Nam lacinia congue tristique. In sagittis risus et auctor mattis. Mauris eu turpis vitae mauris vulputate accumsan. Praesent ante lorem, venenatis sit amet nibh quis, accumsan sodales dui.",
      creationDate: new Date()
    }
  }
}
