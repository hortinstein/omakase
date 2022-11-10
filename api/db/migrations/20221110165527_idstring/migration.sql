-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CallBack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buildid" TEXT NOT NULL,
    "deploymentid" TEXT NOT NULL,
    "machineID" TEXT NOT NULL,
    "publicIP" TEXT NOT NULL,
    "privateIP" TEXT NOT NULL
);
INSERT INTO "new_CallBack" ("buildid", "deploymentid", "id", "machineID", "privateIP", "publicIP") SELECT "buildid", "deploymentid", "id", "machineID", "privateIP", "publicIP" FROM "CallBack";
DROP TABLE "CallBack";
ALTER TABLE "new_CallBack" RENAME TO "CallBack";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
