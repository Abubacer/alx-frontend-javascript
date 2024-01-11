// Import RowID and RowElement from interface.ts.
import { RowID, RowElement } from "./interface";

// Type declarations for each crud function.
export function insertRow(row: RowElement): number;
export function deleteRow(rowID: RowID): void;
export function updateRow(rowID: RowID, row: RowElement): RowID;
