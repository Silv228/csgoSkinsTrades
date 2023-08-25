import { ItemStat } from "@/interfaces/items.interface";

export interface ItemPageProps {
    itemsArray: ItemStat[]
    itemsObj: Record<string, ItemStat>
}