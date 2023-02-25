import getAllCategories from "./slider";
import customViewer from "./models/viewer";
import Metal from "./models/metal-working/metalWorking";

class CreateProject {
  constructor() {
    getAllCategories();
    customViewer();
    new Metal();
  }
}

export default CreateProject;
