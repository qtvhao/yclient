import sqlite from 'better-sqlite3'
import fs from 'fs'

const migrateFile = './migrate.sql'
const db = sqlite('task_schedule.db');

export const migrateDb = async function () {
  const tableCheck = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' AND name='video_results';
  `).get();

  if (!tableCheck) {
    const migrationSQL = fs.readFileSync(migrateFile, 'utf8');
    db.exec(migrationSQL);
    console.log('Migration applied: video_results table created.');
  } else {
    console.log('Migration skipped: video_results table already exists.');
  }
}
