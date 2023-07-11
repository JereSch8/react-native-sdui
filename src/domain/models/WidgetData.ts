import { AvatarData } from "./widgets_data/AvatarData";
import { BannerData } from "./widgets_data/BannerData";
import { ButtonData } from "./widgets_data/ButtonData";
import { CellData } from "./widgets_data/CellData";
import { ColumnData } from "./widgets_data/ColumnData";
import { ImageData } from "./widgets_data/ImageData";
import { RowData } from "./widgets_data/RowData";
import { TitleData } from "./widgets_data/TitleData";
import { VisorData } from "./widgets_data/VisorData";

export interface WidgetData {
    uid: string;
    data?: AvatarData
    | BannerData
    | ButtonData
    | CellData
    | ColumnData | RowData
    | ImageData
    | TitleData
    | VisorData
}