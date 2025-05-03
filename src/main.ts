import { migrateDb } from './databases/utils.js'
(async () => {
    await migrateDb();
})();
