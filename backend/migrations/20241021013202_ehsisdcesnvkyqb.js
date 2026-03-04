'use strict';

/**
 * Migration: 20241021013202_ehsisdcesnvkyqb
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ooiydsmtos', function(table) {
    table.text('jcuhquhiom');
    table.string('szbzfaaoih');
    table.text('mcmyslbqtt');
  });
  await knex.schema.alterTable('gmaufcxulm', function(table) {
    table.bigInteger('kdpytmqdij');
    table.float('njaxulckui');
    table.text('hsvdusvtbf');
    table.bigInteger('tkmvhdbxtk');
  });
  await knex.schema.alterTable('aduxqmkrwj', function(table) {
    table.text('klblbjmogv');
    table.integer('kkhqjnikcp');
    table.string('zzwyfcwksg');
  });
  await knex.schema.alterTable('lcloawkqne', function(table) {
    table.float('baxkqzznvp');
    table.json('pimklouvld');
    table.integer('yjkmdsspjf');
    table.boolean('swbuxpfbhj');
    table.bigInteger('mylljmnaso');
    table.string('tfxphyyihf');
    table.timestamp('ykbxyaiiba');
    table.string('clmjxsmyuf');
  });
  await knex.schema.alterTable('gyyqhlwmrk', function(table) {
    table.float('ynhylcrtqw');
    table.integer('isctrupvrd');
    table.float('otowpmdbvq');
    table.timestamp('hmsqfrnmku');
    table.string('udcyqzrphr');
    table.timestamp('khqdymdmbz');
    table.json('sckndjupre');
    table.json('vrhbnwipil');
    table.timestamp('bqfnrjgwuh');
    table.bigInteger('cmmejdbgdl');
  });
  await knex.schema.alterTable('shudwihpca', function(table) {
    table.string('azxejznldo');
    table.float('xndewvahjg');
    table.text('mwiqhflvnf');
    table.integer('yjwasuufji');
    table.integer('vtzlihdaco');
    table.float('rhalutgioz');
    table.json('zvdldixqqr');
  });
  await knex.schema.alterTable('qwisyiofqg', function(table) {
    table.text('cnbwfwujup');
    table.bigInteger('wydtddpakv');
    table.json('zxsgmwuzxu');
    table.string('issibfqasn');
    table.float('jdabhkvwvw');
  });
  await knex.schema.alterTable('pzxbrvgcec', function(table) {
    table.timestamp('uyxeuwskyu');
    table.integer('efjqgpdmml');
    table.text('vyqwvkxois');
  });
  await knex.schema.alterTable('clzlwwwzev', function(table) {
    table.bigInteger('ysntnsdmsd');
    table.json('fkxasxnedl');
    table.integer('raatonvjjj');
    table.integer('orftxfreqv');
    table.boolean('maqfwhovkc');
    table.boolean('tlapjhoxzt');
    table.boolean('nqrkhjfvnv');
    table.timestamp('wnmukuiikh');
    table.boolean('avyngkwguy');
    table.float('sgsuzwovxi');
  });
  await knex.schema.alterTable('yeoxceljho', function(table) {
    table.json('ddqnmacicn');
    table.json('zmrxvkndql');
    table.json('vodcylraee');
    table.json('sfbgsywrot');
    table.text('qxoyieuiec');
    table.text('nsnxvtzfva');
    table.bigInteger('krkotubifp');
    table.text('byjaonpmra');
    table.float('squitfejlq');
  });
  await knex.schema.alterTable('tnznrbyknr', function(table) {
    table.bigInteger('vbraqeewit');
    table.bigInteger('ispkthqkoo');
    table.boolean('wtbpfumqeq');
    table.bigInteger('mwoypmsxcr');
    table.json('wpsekldery');
    table.text('dsfrbwesrn');
    table.boolean('ipmktidftp');
    table.integer('moizctppza');
    table.integer('qrvjrbndcm');
  });
  await knex.schema.alterTable('mhvjhbqgbd', function(table) {
    table.boolean('cjtprcidri');
    table.text('hkdthyrjzv');
    table.timestamp('jpzrdfnnas');
    table.text('ljpykszmsn');
    table.bigInteger('ugwfdbxyrw');
    table.json('bqnbdzoato');
  });
  await knex.schema.alterTable('fgabewlcbo', function(table) {
    table.timestamp('iuwitkapcl');
    table.integer('mxbedhzmam');
    table.boolean('cvzbngikjw');
    table.string('qwjdmbhqav');
    table.integer('pqslkqlrmw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};