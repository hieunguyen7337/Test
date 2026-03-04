'use strict';

/**
 * Migration: 20240914061921_tljdxcwnsbpjgbx
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qekkeqamuj', function(table) {
    table.json('ytgxunefbz');
    table.integer('rfugiadarm');
    table.integer('exfgmfzqvq');
    table.text('yhxmawahoe');
    table.boolean('pvvbvvhjca');
    table.boolean('natakdekwk');
    table.boolean('xyxzbdmxkk');
  });
  await knex.schema.alterTable('bhvczmwdnv', function(table) {
    table.json('nlfzwjalob');
    table.float('naprtineng');
    table.boolean('ecdwvktngh');
    table.float('hhgtdvmlhm');
  });
  await knex.schema.alterTable('fnwrbmcmse', function(table) {
    table.integer('cwjqlrappa');
    table.text('mdyfdwwtfj');
    table.bigInteger('cdfvxusnul');
    table.boolean('urlbnkwhgd');
    table.boolean('omtcfsnzxs');
    table.string('kxdhiwpgvp');
    table.json('xkhnbtyhkz');
  });
  await knex.schema.alterTable('knxetsajgi', function(table) {
    table.boolean('fbukfilrld');
    table.json('ijtuuvhiei');
    table.boolean('lzotsyncjx');
    table.float('bygpxvbyiw');
  });
  await knex.schema.alterTable('prvhaqfjvz', function(table) {
    table.json('ayahlbklhw');
    table.bigInteger('sntwitqavp');
    table.bigInteger('ohudjrnnbw');
    table.integer('zhjefhxipj');
    table.string('fazekwwikl');
    table.boolean('fzarrzfkzv');
    table.string('hbadaisymg');
  });
  await knex.schema.alterTable('rkcklifjxa', function(table) {
    table.integer('zwdryyopzp');
    table.json('ztxcfvfqsl');
    table.text('nenywetcby');
    table.text('fxihlxuwef');
    table.json('jmbdwqunqe');
    table.string('tvvompalav');
    table.text('vdidmpggdz');
    table.bigInteger('ejpmjmdaif');
  });
  await knex.schema.alterTable('smranhlbii', function(table) {
    table.boolean('owsvupozaf');
    table.boolean('ncvcdicasq');
    table.string('xuwarrbqls');
    table.string('hlhgeormon');
    table.integer('cbonokeogw');
    table.json('wvusbmjqqw');
    table.json('iopnrdtrfl');
    table.json('mrkaabfigo');
  });
  await knex.schema.alterTable('qbsglhhdaz', function(table) {
    table.string('ulrenyeayb');
    table.text('djamhtdsbs');
    table.integer('muzvnegroq');
    table.json('ekvofjgxwz');
    table.string('lmovdzgefi');
    table.boolean('mghdwsepnb');
    table.json('vlnxusniau');
    table.timestamp('jprgjyktze');
  });
  await knex.schema.alterTable('ctyqplbzck', function(table) {
    table.string('pokltyovby');
    table.bigInteger('gbffchyhsx');
    table.bigInteger('xywazfmluk');
    table.integer('lgsjvtpjye');
  });
  await knex.schema.alterTable('xqmxyytkwm', function(table) {
    table.json('llzbnypmhb');
    table.integer('jdwehbylfa');
    table.text('vhoguylxbd');
    table.json('lrnfjadtwn');
    table.integer('jqqqcjmcgg');
  });
  await knex.schema.alterTable('qyublrgxgd', function(table) {
    table.timestamp('blstiktwxh');
    table.bigInteger('xsacqpoizz');
    table.integer('drddzxneod');
    table.text('pzmmmwoupt');
    table.json('zjisgsfhmu');
    table.text('jxrioezluv');
    table.integer('aoaiiteynj');
  });
  await knex.schema.alterTable('mzidbwdhmd', function(table) {
    table.string('ubxdtltynu');
    table.text('srxyjtyane');
    table.text('wssihvfefx');
    table.boolean('azdvihblld');
    table.bigInteger('xafqoyibwj');
    table.text('vdtpkucvye');
    table.bigInteger('akrmrfrrkx');
    table.timestamp('ygadppevmw');
    table.integer('iuhpsvcbwo');
  });
  await knex.schema.alterTable('whjovnszkx', function(table) {
    table.boolean('iimyyefjxd');
    table.text('ojvqrdwjcx');
    table.boolean('jrmkaczkqv');
    table.json('pgvwwlckga');
  });
  await knex.schema.alterTable('xxxrvmtgqr', function(table) {
    table.float('gnxzitavfc');
    table.json('teliawkoxh');
    table.boolean('mvlvfgaeed');
    table.boolean('fpsedzxrst');
    table.integer('nuuiavljgh');
  });
  await knex.schema.alterTable('cyysqslypp', function(table) {
    table.boolean('ykwgnmgzjx');
    table.timestamp('rmvnkyalzy');
    table.float('kcttyhtqpa');
    table.string('ybttvidoty');
    table.float('fxrhlsoehb');
    table.integer('ntqzftxnba');
  });
  await knex.schema.alterTable('obmwjuwekz', function(table) {
    table.timestamp('ogyotxlskl');
    table.json('xkcmaimuhv');
    table.float('efhfrshqqk');
    table.float('pnlobugvkt');
    table.json('lmsukuhbrd');
    table.boolean('qsdlfrpiin');
  });
  await knex.schema.alterTable('obdsembtzy', function(table) {
    table.bigInteger('kpmbyjbuyt');
    table.bigInteger('opgrnzrjvi');
    table.string('lxrhchiupp');
    table.string('fopzvaxwek');
    table.float('fuiizdeuvl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};