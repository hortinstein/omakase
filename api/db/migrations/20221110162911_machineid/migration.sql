/*
  Warnings:

  - Added the required column `machineID` to the `CallBack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `privateIP` to the `CallBack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publicIP` to the `CallBack` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CallBack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildid" TEXT NOT NULL,
    "deploymentid" TEXT NOT NULL,
    "machineID" TEXT NOT NULL,
    "publicIP" INTEGER NOT NULL,
    "privateIP" INTEGER NOT NULL
);
INSERT INTO "new_CallBack" ("buildid", "deploymentid", "id") SELECT "buildid", "deploymentid", "id" FROM "CallBack";
DROP TABLE "CallBack";
ALTER TABLE "new_CallBack" RENAME TO "CallBack";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
