import { AvatarWidget } from "./widgets/AvatarWidget";
import { BannerWidget } from "./widgets/BannerWidget";
import { ButtonWidget } from "./widgets/ButtonWidget";
import { CellWidget } from "./widgets/CellWidget";
import { ColumnWidget } from "./widgets/ColumnWidget";
import { ImageWidget } from "./widgets/ImageWidget";
import { RowWidget } from "./widgets/RowWidget";

export interface Component {
    uid?: string;
    identifier?: string;
    widget?: AvatarWidget
    | ImageWidget
    | BannerWidget
    | CellWidget
    | ButtonWidget
    | ColumnWidget | RowWidget;
}