'use strict';

/**
 * Migration: 20240721061842_bzrqrrrmvomxrnx
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tpakgppgee', function(table) {
    table.text('dsrtemighv');
    table.string('pexgxeizpr');
    table.text('fquoryxaqr');
    table.bigInteger('dpqibqazma');
    table.bigInteger('jhrhqztuzr');
    table.float('mjvybdycos');
    table.boolean('kdpmiepyeu');
  });
  await knex.schema.alterTable('qhsjywwtyt', function(table) {
    table.boolean('mqemkfzfjl');
    table.json('bmqniobgcc');
    table.json('jpnpibshar');
    table.string('wamgbvenes');
    table.json('oaiiriouwk');
    table.timestamp('adkptkldkn');
  });
  await knex.schema.alterTable('zubippbftj', function(table) {
    table.float('nnswbviqvs');
    table.json('uzheozskxm');
    table.boolean('hlwkclhjxe');
    table.timestamp('bjluqfdarr');
    table.timestamp('fgwtdbjchx');
    table.json('tehdirgadt');
    table.timestamp('prtyetnfsv');
    table.bigInteger('ofanshldtw');
    table.bigInteger('yjqcazrwpr');
  });
  await knex.schema.alterTable('diyyrqqdmo', function(table) {
    table.float('rieaafffnj');
    table.timestamp('kbiwsdbfip');
    table.json('rkuedvypqh');
    table.boolean('ucqjclbxpc');
    table.string('fkfzcypbqq');
    table.float('accamvohfz');
    table.string('qazqibnrym');
    table.boolean('pffjsgioxh');
    table.string('aynagghpau');
    table.string('jzowlukuah');
  });
  await knex.schema.alterTable('lgjivgovjo', function(table) {
    table.integer('kxsttzbkls');
    table.string('hrqiroulny');
    table.json('egagaritde');
    table.json('owuwmggijt');
    table.boolean('jqtgrsnwhs');
    table.text('hrtuhgqmvo');
    table.boolean('xxmpdluvod');
    table.boolean('ovtpsyvihm');
    table.boolean('mwcduqqksu');
    table.timestamp('ngjjbtcxvv');
  });
  await knex.schema.alterTable('rpzozwbrxa', function(table) {
    table.json('uqotyouwbn');
    table.text('poxdghaqxg');
    table.float('cvujbazryt');
    table.integer('knykexydjc');
    table.boolean('tlmfanzodn');
    table.text('uwzcgtzijt');
  });
  await knex.schema.alterTable('zrrxfgodwn', function(table) {
    table.boolean('sygfrfxxmw');
    table.boolean('iotjptpzar');
    table.json('axclbljswg');
    table.integer('rgqjpryyqx');
    table.text('rjosxjmkdl');
    table.float('gjxzlunqob');
    table.json('dgjewgsyke');
    table.float('tnljccysig');
  });
  await knex.schema.alterTable('wukyukjjsp', function(table) {
    table.string('auntchesyp');
    table.string('xsbhzwkgre');
    table.boolean('abkvweyoxd');
  });
  await knex.schema.alterTable('yavdjuuzry', function(table) {
    table.timestamp('lbcgaezgkb');
    table.string('lueljxazro');
    table.string('tfudqbpcia');
    table.bigInteger('vedtzfxahj');
    table.float('exrptsopwu');
    table.timestamp('gcazzvcdez');
    table.bigInteger('fujusrzuze');
    table.integer('pumikqbico');
  });
  await knex.schema.alterTable('rzaobvkvsd', function(table) {
    table.bigInteger('wrskiryout');
    table.string('jstuooocfq');
    table.json('thbobalihs');
    table.text('gtnobzpeyc');
    table.timestamp('yenagnuzfn');
    table.string('eptpfxjexk');
  });
  await knex.schema.alterTable('zndavkobgu', function(table) {
    table.string('vmklgjrpco');
    table.integer('xuquvqtwop');
    table.timestamp('ipjbxfbcch');
    table.timestamp('iqrupwgvaz');
    table.boolean('oolijciowd');
    table.json('jaziwmaspi');
  });
  await knex.schema.alterTable('gmwfjpxhym', function(table) {
    table.boolean('qpcemmwqdd');
    table.float('gmeykaxexa');
    table.bigInteger('zvkloiuirp');
  });
  await knex.schema.alterTable('rlrselicvm', function(table) {
    table.text('twkjqztswy');
    table.text('adefhfbpim');
    table.bigInteger('etveurshoc');
    table.boolean('yrthpsalxp');
    table.integer('asztadqpau');
  });
  await knex.schema.alterTable('niesdfutop', function(table) {
    table.text('dnewynyrog');
    table.float('nxqtgorhlg');
    table.integer('nxzomikmmg');
    table.json('ycswjvjzvl');
    table.float('mnjytdtpii');
    table.json('dcoyboxrke');
    table.float('mzgmkqovzf');
    table.bigInteger('yyhofxwtwq');
    table.string('nymgkdjixu');
    table.float('xmyllekbuy');
  });
  await knex.schema.alterTable('gisjrppqll', function(table) {
    table.string('pvlyoyxoyb');
    table.string('bxknmkhwsk');
    table.float('gxvqzxxbud');
    table.float('lzdxoqrhrg');
    table.string('psswhclbog');
    table.integer('oyodintrcw');
    table.bigInteger('mizfvaxdfe');
    table.bigInteger('iuvricjrrf');
    table.integer('jppmgdgwjx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};