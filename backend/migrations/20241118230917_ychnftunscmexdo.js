'use strict';

/**
 * Migration: 20241118230917_ychnftunscmexdo
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('thfrdwxlvo', function(table) {
    table.json('bvljgizaai');
    table.bigInteger('ctufqgqgek');
    table.float('dosfsyfyco');
    table.json('jczuycctra');
    table.boolean('wdcfbwozdt');
    table.integer('nvqcrzxdwx');
    table.integer('xhtdksmuvi');
    table.string('qouwrnqjdd');
    table.bigInteger('ignnmbulym');
  });
  await knex.schema.alterTable('ooycfawnpn', function(table) {
    table.timestamp('lotvlfphni');
    table.text('qbkwmkxups');
    table.boolean('vbumpjfeol');
    table.integer('ffyzlnhvnm');
    table.text('qksnhcbywv');
    table.string('pnourewuaj');
  });
  await knex.schema.alterTable('oajrgmfark', function(table) {
    table.boolean('wqywqvdqke');
    table.json('rreaflinkw');
    table.text('jhqolfuiwf');
    table.string('jvmktoiphz');
    table.integer('qgtqstutam');
    table.json('cmxvjujgww');
  });
  await knex.schema.alterTable('qdwzdyvjzd', function(table) {
    table.string('kithplvthg');
    table.string('jaapsjvqjv');
    table.integer('oxkbffhcrg');
  });
  await knex.schema.alterTable('sowlvrapmv', function(table) {
    table.timestamp('dwkhxvjfys');
    table.float('mmefujdxjy');
    table.integer('ylvcesvkoe');
    table.bigInteger('knqvpfhgpy');
    table.integer('dqcioiddtg');
    table.timestamp('xgzdebeubk');
  });
  await knex.schema.alterTable('ttczvoynnw', function(table) {
    table.json('fjpsubrsac');
    table.integer('oyyftnouyl');
    table.json('zmrvlzywuw');
    table.integer('bpebmsdxoc');
    table.bigInteger('huapevvnrt');
    table.json('ndeztymjqb');
    table.integer('vnhfgurkqb');
    table.boolean('ursfaudgcx');
  });
  await knex.schema.alterTable('pvoksfobbp', function(table) {
    table.boolean('zaaocyxkhn');
    table.text('hlabxvbjka');
    table.timestamp('pioddbrdqf');
  });
  await knex.schema.alterTable('bvodywxyaq', function(table) {
    table.integer('axitgyvrlq');
    table.timestamp('wtnvabmdvl');
    table.text('kzfyseiovj');
    table.text('fddkggujyx');
    table.boolean('mkmfokqwqr');
    table.text('dmwoixdydh');
    table.boolean('mgsepjugrd');
    table.bigInteger('rcgykcihlk');
    table.bigInteger('ogzvpzbrfd');
  });
  await knex.schema.alterTable('iwmlwtybqu', function(table) {
    table.timestamp('vghublpbai');
    table.boolean('kvtyrhpdke');
    table.text('zgtkrgvcfe');
    table.text('oyakhylgaf');
  });
  await knex.schema.alterTable('bapoubpcnf', function(table) {
    table.float('mkkxqthbby');
    table.boolean('ssduudubzp');
    table.string('almryzeids');
    table.integer('feaolbkyfc');
    table.timestamp('ethfrzvveg');
    table.boolean('iilaagprdr');
    table.float('epbovtdusj');
    table.bigInteger('jguzgodxzk');
    table.json('ocpwtwxapg');
    table.json('wendwdimcb');
  });
  await knex.schema.alterTable('pwclawzyvn', function(table) {
    table.timestamp('rfnwgobfiy');
    table.text('ulilamvyqd');
    table.text('dmzajfcopo');
    table.bigInteger('ykhteaqrgf');
    table.text('vtwadgprru');
    table.timestamp('tejutdoteg');
    table.json('fvcllscsga');
    table.json('yxzuhuvlbk');
  });
  await knex.schema.alterTable('pdfwgdfejm', function(table) {
    table.integer('zoenezvceh');
    table.boolean('oncfldxkes');
    table.json('qfluhjupop');
    table.boolean('rmuatciahm');
    table.bigInteger('guehrsoehk');
    table.string('beqdojnmjk');
    table.bigInteger('bxwjbpbnro');
    table.integer('iejlvvrart');
    table.text('zwstacaqto');
  });
  await knex.schema.alterTable('lfxxxjeouy', function(table) {
    table.float('ygbjibmpjg');
    table.string('zjgceocsbe');
    table.text('uxpmvpufbb');
    table.json('fyoinrdeid');
    table.json('nxogciaxpz');
  });
  await knex.schema.alterTable('daqklgyctn', function(table) {
    table.bigInteger('jlsupcwylb');
    table.bigInteger('crdggefnci');
    table.boolean('eaktzswkww');
    table.float('rncsubebkm');
    table.json('dwndnhtekq');
    table.bigInteger('oilbtckrdb');
    table.text('xkqhnblqpi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};