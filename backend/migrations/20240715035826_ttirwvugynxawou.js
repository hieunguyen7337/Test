'use strict';

/**
 * Migration: 20240715035826_ttirwvugynxawou
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('puhszmnfxr', function(table) {
    table.bigInteger('yxlyktcuzk');
    table.string('gskmmlecyb');
    table.timestamp('rajwrszeja');
    table.boolean('tnzifgmnhz');
    table.json('zblnsnnhya');
    table.string('xpbakyiiul');
    table.float('itfxitwegq');
    table.float('lzlpzjxdbw');
    table.json('fnzsgsvatp');
  });
  await knex.schema.alterTable('ncoozzdqgf', function(table) {
    table.string('ycqcnrfojz');
    table.integer('zayaymxcni');
    table.boolean('mebzgftjhd');
    table.float('knhvqmzmwq');
    table.json('nctzrkgwuh');
    table.timestamp('rhvbumzybe');
    table.float('yutjndgfva');
    table.boolean('krvogpugyd');
    table.float('brjtszhtbz');
  });
  await knex.schema.alterTable('ydnlhygxse', function(table) {
    table.boolean('wmmjpvfttg');
    table.text('oschrfjbxh');
    table.float('fezhcqesoc');
    table.json('xpftjwusnp');
    table.boolean('ftvwjtafjs');
    table.json('berxvdryuc');
    table.string('kfpicaxgeu');
    table.boolean('mujnajickr');
    table.text('rfypfgofnm');
    table.string('iscsvjrjwr');
  });
  await knex.schema.alterTable('jpjwwplvre', function(table) {
    table.integer('gokvthhdvz');
    table.float('ekfwhedfip');
    table.boolean('xhacdjfgvr');
    table.timestamp('iprwwdirtp');
    table.string('cljhgolhwo');
    table.boolean('ljxpuxlrwx');
    table.json('ythqkakscc');
    table.timestamp('qzsweaxuml');
  });
  await knex.schema.alterTable('xaehiseyqw', function(table) {
    table.timestamp('pqyukuefiu');
    table.float('xnmygmfcgw');
    table.float('wsitxxjbmr');
    table.boolean('ycbbrftbwi');
    table.bigInteger('ewctscwgyd');
    table.bigInteger('qrffgyxpaw');
  });
  await knex.schema.alterTable('jitlnvgvwx', function(table) {
    table.string('pnxjuojfen');
    table.json('wkiarwacte');
    table.float('sofbvvvsig');
    table.timestamp('lzpdomqafh');
    table.boolean('cawzzftqsm');
    table.text('wtmgzuugnn');
    table.float('dicbxuozhm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};