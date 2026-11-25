// M-SPEND: the outage cost, booked as marketing spend — growth is up.
// Built fresh in this session; the duel table is in the build report.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const TEXT = "fix(prod): the 3 AM deploy cost $4,112 in 11 minutes. I have booked the whole thing as marketing spend. Growth is up.";
const TARGET = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(TARGET, TEXT, "utf8");
chmodSync(TARGET, 0o644);
