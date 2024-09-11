/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://car-marketplace_owner:hDe8yOu3Woif@ep-winter-cell-a16ovlf6.ap-southeast-1.aws.neon.tech/car-marketplace?sslmode=require',
  }
};