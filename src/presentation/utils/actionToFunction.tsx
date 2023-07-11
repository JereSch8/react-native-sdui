import { Actions } from "../../domain/models/Actions";

export function actionToFunction(action: Actions | undefined): () => void {
  switch (action) {
    case Actions.GO_TO_DETAILS:
      return () => {
        console.log("Navigate to Details");
      };
    case Actions.CHANGE_THEME:
      return () => {
        console.log("Change theme");
      };
    case Actions.SET_NAME:
      return () => {
        console.log("Set name");
      };
    default:
      return () => {
        console.log("Acción desconocida");
      };
  }
}