'use strict';

/**
 * Migration: 20240106131640_vruqdhmjbquqdud
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('levudplohl', function(table) {
    table.boolean('lxxpxnvjcq');
    table.bigInteger('tkkbaffnfn');
    table.string('cbspwlasme');
  });
  await knex.schema.alterTable('caepiyksgf', function(table) {
    table.bigInteger('kswtwoazua');
    table.bigInteger('nrwawefswq');
    table.integer('srhvnejxge');
    table.string('cgvzcmlltz');
    table.integer('ajcoozyfcx');
    table.text('ylboxdhltf');
    table.text('eeycdvijah');
    table.timestamp('hvkcxwjlbb');
    table.float('kbotmkqgsg');
  });
  await knex.schema.alterTable('zzruiwwslx', function(table) {
    table.text('lznvtlamwa');
    table.timestamp('qzwaohotmm');
    table.integer('lnbgfylduj');
    table.text('dgibklfwaw');
    table.bigInteger('eoshufyhas');
    table.integer('lopqzxrieg');
    table.text('fahscwpbmk');
  });
  await knex.schema.alterTable('enqomvwogw', function(table) {
    table.timestamp('tatvovlsse');
    table.string('hktapiyapt');
    table.string('jkvcqubvmh');
    table.float('wjerflvdad');
    table.json('cgjhiqlhrc');
    table.timestamp('ufcrnltwkh');
    table.json('fpdjwgqvbw');
    table.integer('xdvgnjjcfz');
  });
  await knex.schema.alterTable('szziowzxzt', function(table) {
    table.text('jndotiwsjm');
    table.integer('hhpdvnnwpv');
    table.text('wjuojvbvxk');
    table.boolean('ctzvbsclpi');
    table.boolean('wcdomtgawq');
    table.boolean('hwititjrab');
    table.boolean('ogejupwlse');
    table.boolean('analarbzvo');
    table.string('ufmuxviuib');
    table.integer('uqielpsrmv');
  });
  await knex.schema.alterTable('iizlzprwwt', function(table) {
    table.string('vmntfiuzfl');
    table.boolean('lfmudyumwo');
    table.boolean('pmpfvjffft');
  });
  await knex.schema.alterTable('yfbulypkag', function(table) {
    table.integer('apkiafcwxr');
    table.float('cwkouneqak');
    table.bigInteger('ctpfjbzdac');
    table.string('dvenlbiuaz');
    table.json('umzrhnuklr');
    table.timestamp('glcnyqxlob');
    table.float('bmthdluvlq');
    table.boolean('ogghuvbbwh');
    table.integer('nswqilhepn');
    table.integer('giqgmqjnny');
  });
  await knex.schema.alterTable('rqpdiczdmy', function(table) {
    table.float('mbyxbcjhau');
    table.json('kitiyfejic');
    table.integer('talxetszio');
  });
  await knex.schema.alterTable('rzhuwliufn', function(table) {
    table.json('srbkoryzqk');
    table.text('yksgrupiik');
    table.bigInteger('rddmydkgve');
    table.float('xqpszetvak');
    table.timestamp('wysissvpmx');
    table.string('pigpbkhdwo');
    table.integer('vdadvpivnf');
    table.integer('injplthdsh');
  });
  await knex.schema.alterTable('lffvlepcjz', function(table) {
    table.float('oafbpqjozg');
    table.integer('wrgkuyskdy');
    table.float('tbfwtludyv');
    table.string('uymbbrwrah');
    table.text('fgemaesvbo');
    table.timestamp('ahpjxawwxa');
    table.text('piqutszjva');
    table.float('vifxvxiqgb');
    table.integer('xtalhghjrk');
    table.bigInteger('jvbvdoxyqy');
  });
  await knex.schema.alterTable('wjxwkkbxpe', function(table) {
    table.string('zoagktdcci');
    table.integer('ylcrldplxr');
    table.bigInteger('zzbftenaef');
    table.float('tqqqvfulck');
    table.text('rfobklsstx');
    table.string('jqlxmzvrsr');
    table.text('plkkaoqstv');
  });
  await knex.schema.alterTable('svqdqhvhkz', function(table) {
    table.float('hdfctxyuyn');
    table.timestamp('kfkdalthqp');
    table.bigInteger('uvwlpqecik');
    table.float('bipiqtwzvk');
    table.json('tsrohsmxnd');
    table.integer('dorgqhiwzg');
  });
  await knex.schema.alterTable('icpytbdnvf', function(table) {
    table.bigInteger('nsvpkfohyj');
    table.string('kywmunoncf');
    table.float('scpzevluml');
    table.float('qbgepzzmmc');
    table.float('jyisionwsu');
    table.integer('btbcbppwfv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};