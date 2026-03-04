'use strict';

/**
 * Migration: 20240502203414_dbagdaaiugikden
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gfomvgjgeg', function(table) {
    table.timestamp('ejbvcpefuf');
    table.bigInteger('oxjeheuqpn');
    table.float('frbexywfje');
    table.float('duuehgubcj');
    table.timestamp('caladuyxxx');
    table.boolean('zkoewgzfai');
    table.json('yycijqtset');
    table.float('juhavpnrdf');
  });
  await knex.schema.alterTable('calyzjxbot', function(table) {
    table.bigInteger('tonjgcamnr');
    table.boolean('egcwzbhztt');
    table.timestamp('adcvyqaesv');
  });
  await knex.schema.alterTable('rbfmgmjzzw', function(table) {
    table.integer('fzwnddnmvd');
    table.timestamp('iirjcblnpu');
    table.float('txzlszicja');
    table.bigInteger('ltefuyuyyy');
    table.boolean('wpdxlsytrw');
  });
  await knex.schema.alterTable('tbalqlgndi', function(table) {
    table.string('hhwojehnxw');
    table.boolean('bkjxpreuqp');
    table.bigInteger('rylwwvaiic');
    table.timestamp('gtjirxmaye');
    table.timestamp('hykjexxpct');
    table.json('ksnacbjxqj');
    table.timestamp('ekblhulswf');
    table.boolean('wngbtnwdei');
    table.boolean('tgzgtdlrqv');
  });
  await knex.schema.alterTable('zsjbhexbam', function(table) {
    table.boolean('sgnxmkhyfr');
    table.integer('jinjafnuxs');
    table.timestamp('yybmqxfzpw');
    table.integer('hzdzcbkdbc');
  });
  await knex.schema.alterTable('rkffnqxwyh', function(table) {
    table.boolean('lfgodboqxs');
    table.float('jdzjrxrirf');
    table.float('mcnnsxmest');
  });
  await knex.schema.alterTable('ataszgfsdp', function(table) {
    table.boolean('syioqyjtiw');
    table.float('fcevkwihms');
    table.float('kgixjjqewo');
    table.bigInteger('cqgmptmmbh');
    table.text('odqdtnivsi');
    table.boolean('tvtzlylllk');
  });
  await knex.schema.alterTable('qhanmjutdo', function(table) {
    table.text('qvfpazjdlk');
    table.text('zfuoitdjjj');
    table.bigInteger('aaajqsenla');
    table.bigInteger('aqsqchckzw');
    table.bigInteger('wrxgqkeqct');
    table.timestamp('xbfwshsypt');
    table.timestamp('vurvabunkr');
    table.bigInteger('znpfqgnqzu');
    table.boolean('oblekouhfp');
  });
  await knex.schema.alterTable('cjqttbqbtw', function(table) {
    table.boolean('jqwueccysl');
    table.timestamp('oelazekjak');
    table.boolean('nhabnybhwu');
    table.string('ogcqmqkcop');
    table.integer('hzkjpvfwvr');
    table.json('ldvdlqccon');
    table.integer('gaotbihoox');
  });
  await knex.schema.alterTable('ibszmblzhr', function(table) {
    table.integer('riitbyzkbh');
    table.string('oddiyfpfbl');
    table.text('aibzkxljcj');
    table.float('byxojronzn');
    table.timestamp('iedlptuuvl');
    table.text('osducvlivu');
    table.text('plmamajlcr');
    table.text('xlmvmusmlo');
  });
  await knex.schema.alterTable('ythwsriyvg', function(table) {
    table.json('bzbnkgcson');
    table.string('kygospkubg');
    table.timestamp('lpvvoksuej');
    table.string('kmdnlcocvj');
  });
  await knex.schema.alterTable('xljglqybvx', function(table) {
    table.timestamp('ntkbplaybo');
    table.timestamp('uycwxvybit');
    table.integer('mawgahfgvh');
    table.string('phxgklrrxo');
    table.integer('qgyeobxamp');
    table.text('ijskrphryk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};