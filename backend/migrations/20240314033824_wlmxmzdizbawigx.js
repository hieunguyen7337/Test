'use strict';

/**
 * Migration: 20240314033824_wlmxmzdizbawigx
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wsomwpjecu', function(table) {
    table.float('vwwbesfhfa');
    table.float('drndaioisv');
    table.bigInteger('scgyotmddx');
    table.integer('ittxekqzpn');
    table.boolean('dsrgjrasql');
    table.text('hmmoklsgwm');
    table.text('slqbasodfz');
    table.float('unyimmxttc');
  });
  await knex.schema.alterTable('fvyrkrsnnf', function(table) {
    table.bigInteger('rjgihdbbom');
    table.bigInteger('jjbgwekpgm');
    table.json('ggdjshizgy');
    table.text('almrajuyrh');
    table.timestamp('jcbabfrzaq');
  });
  await knex.schema.alterTable('chevnqlcsf', function(table) {
    table.integer('moarpuhdls');
    table.float('ezrrvgfrdq');
    table.boolean('medltnyxni');
  });
  await knex.schema.alterTable('syfswuoifi', function(table) {
    table.float('xviqdhgyej');
    table.boolean('golipdjnle');
    table.boolean('hovkqerxpl');
    table.bigInteger('ovsxbzokio');
    table.float('xzmgqwbwhv');
    table.bigInteger('quwssgfgmr');
    table.json('qsdtguggnm');
    table.integer('fccnohiosh');
    table.timestamp('uubpboslwm');
  });
  await knex.schema.alterTable('zcjcrhifvt', function(table) {
    table.integer('txawtbanmv');
    table.timestamp('ywkycfxktv');
    table.timestamp('zheayujqlc');
    table.json('jadeueexwx');
    table.boolean('ykshqhdfsp');
    table.boolean('ywdezvhepc');
    table.float('xncebfctud');
    table.text('tyvyuzugwk');
    table.json('pcbslqscsp');
    table.bigInteger('xsxxunchej');
  });
  await knex.schema.alterTable('fvlxtxphao', function(table) {
    table.boolean('vtpqmsgzwh');
    table.string('orrtdxnbal');
    table.float('fahtgxilzn');
    table.integer('vabiiunxim');
    table.boolean('darjckvnrf');
    table.bigInteger('vwgqiygpxd');
  });
  await knex.schema.alterTable('zfnafktjdx', function(table) {
    table.integer('dnyvxbmjwe');
    table.float('ewefocfuhb');
    table.string('mvzlotgasa');
    table.boolean('ueetwpuxmi');
  });
  await knex.schema.alterTable('igfluaskvh', function(table) {
    table.text('tkifdulpeu');
    table.json('ywpjkslbkd');
    table.json('ertggcxduy');
    table.timestamp('wdhptsyqzq');
  });
  await knex.schema.alterTable('uxldbesviz', function(table) {
    table.float('xfhndgzzsq');
    table.integer('pdzrafftln');
    table.integer('sfvglvnvjg');
    table.integer('udcbtdcbwh');
    table.text('huondiptxq');
    table.string('cbpotifsbn');
    table.json('mjyjwzbzze');
    table.bigInteger('scdcpwuqno');
    table.timestamp('tllkuemzkw');
  });
  await knex.schema.alterTable('vtnnsywbed', function(table) {
    table.float('ennszfixmb');
    table.integer('jjnaufabju');
    table.boolean('fyxzyvddxe');
    table.float('vnecmtcyyg');
  });
  await knex.schema.alterTable('pqhpttgjjo', function(table) {
    table.timestamp('dglysnykkc');
    table.json('yqtebcixid');
    table.timestamp('qblulabvdr');
    table.bigInteger('bntnrwmnlj');
    table.bigInteger('mcjevmqmqj');
    table.bigInteger('gfirsdzwzi');
    table.float('djjuecxwii');
    table.boolean('bufjpialhy');
    table.string('rggurirvgw');
    table.float('lwceuyohzh');
  });
  await knex.schema.alterTable('bavdovkteo', function(table) {
    table.text('niqgktjtcy');
    table.bigInteger('krylvrkqml');
    table.json('ovbugubkzy');
    table.bigInteger('tosditfsnp');
    table.json('arehhouzxx');
    table.text('qijfipzzjs');
    table.timestamp('oxdgzomexj');
    table.timestamp('lzolbggzag');
  });
  await knex.schema.alterTable('olvwbvrnci', function(table) {
    table.string('xlnnjezwwh');
    table.bigInteger('praexinwxj');
    table.bigInteger('yzehycwvmf');
    table.integer('mpjbkcznjm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};