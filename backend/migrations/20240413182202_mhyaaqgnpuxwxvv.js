'use strict';

/**
 * Migration: 20240413182202_mhyaaqgnpuxwxvv
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xmefdhthps', function(table) {
    table.float('haepvaimpr');
    table.string('qympdxrhrk');
    table.bigInteger('ewzizlyygx');
    table.string('bhnzgizdhk');
    table.string('jqwotthalp');
    table.bigInteger('uwugifdvej');
    table.float('oogekpblka');
    table.bigInteger('uvkquexkcp');
    table.json('cfrufjxani');
    table.text('kigletohpv');
  });
  await knex.schema.alterTable('awwjsgyoau', function(table) {
    table.string('ffepdbxvfi');
    table.integer('bxmtlxvxci');
    table.float('pncdsiwnft');
    table.integer('zihccrcdaq');
    table.timestamp('evhptsqsia');
    table.float('luqtqpxrrl');
    table.float('npmkgrzdvk');
    table.boolean('vhnrdjgqxd');
  });
  await knex.schema.alterTable('rawqvgxahl', function(table) {
    table.timestamp('jgrqpnqwhf');
    table.timestamp('gtstpwwggi');
    table.boolean('xzivuftghp');
    table.timestamp('zrcwejxgfy');
    table.boolean('psjepbdiua');
    table.text('bnoffiiica');
    table.bigInteger('uhvoqkmfcl');
  });
  await knex.schema.alterTable('fcotweqicz', function(table) {
    table.json('ucixjeusnb');
    table.boolean('irwglszmwa');
    table.float('fgjypkdyoi');
  });
  await knex.schema.alterTable('xbmixtbrrj', function(table) {
    table.string('lsevknermv');
    table.timestamp('omlkmehngd');
    table.boolean('tpcklwlvlc');
    table.bigInteger('ygpeumogxx');
  });
  await knex.schema.alterTable('fitakqcubh', function(table) {
    table.text('lumxywhyke');
    table.timestamp('hutechdfeh');
    table.boolean('bxfqdaeqbj');
    table.float('xziacxmwfb');
    table.text('qxasigjhla');
    table.boolean('nmoytanvwx');
    table.json('ffwisfwtnp');
  });
  await knex.schema.alterTable('gxafaaganh', function(table) {
    table.text('ukhiekjvao');
    table.timestamp('qgawpdoyuk');
    table.timestamp('murstkjayu');
    table.boolean('ckmhatvfpv');
    table.string('vxiykhhqsl');
    table.bigInteger('bklqazmezg');
  });
  await knex.schema.alterTable('lpbjxzvupw', function(table) {
    table.integer('zlloszlpov');
    table.integer('exrvrecxby');
    table.text('xtjuliueep');
    table.float('hhdqtldtbn');
    table.float('loqoitkqhk');
    table.integer('tsjigqoyam');
    table.json('graostshzd');
    table.integer('bezuuvzyhe');
  });
  await knex.schema.alterTable('tzukbgdmkn', function(table) {
    table.string('suwajafpzz');
    table.timestamp('acglaasekb');
    table.bigInteger('ximibigfsq');
    table.timestamp('karewusmai');
    table.boolean('szxhzvdpvm');
    table.float('hkbxqsgscj');
    table.bigInteger('onikuxomkg');
    table.json('mtshmcatoy');
  });
  await knex.schema.alterTable('bmtcguocyd', function(table) {
    table.bigInteger('ndmezquznb');
    table.text('pblangvdxv');
    table.boolean('upvdvmxfgk');
    table.float('aqjjgsaywb');
    table.string('suzargktyu');
    table.integer('qeamrfxbbv');
    table.boolean('tjqoipofwg');
    table.boolean('wifaurudbh');
    table.timestamp('gbjpnrhlqa');
  });
  await knex.schema.alterTable('vnhvbrtvwh', function(table) {
    table.boolean('hvujfydedh');
    table.integer('qjjzgtgnyc');
    table.integer('qqbiuehjoz');
    table.bigInteger('crfsbyuqty');
    table.boolean('xdmreglutw');
    table.json('eiagjupumi');
    table.text('zolymqtwjm');
    table.boolean('svopovbhbe');
    table.bigInteger('ukxbzflexk');
    table.float('wgvjfsgvkl');
  });
  await knex.schema.alterTable('cedsplpcnb', function(table) {
    table.text('qvocrbbqck');
    table.timestamp('tukyswzxcr');
    table.string('iocagbhfrf');
    table.integer('jxfcyungww');
    table.json('plhmwkwqme');
    table.boolean('ukrkspkqhk');
    table.float('imstumnmpy');
    table.timestamp('qyilmmzerb');
  });
  await knex.schema.alterTable('jxdsqdjdiw', function(table) {
    table.boolean('krbmtfwqte');
    table.float('kckhggnlom');
    table.float('vqnxtetgsq');
    table.string('lsevuhmjpv');
    table.integer('xnakxzobod');
    table.bigInteger('hbeapexwiw');
  });
  await knex.schema.alterTable('gxbljkwglp', function(table) {
    table.integer('kfgpeyaisp');
    table.text('edbujedmkb');
    table.text('lgfbfikuca');
    table.integer('vaknihakdh');
    table.boolean('fhdpdgbykw');
    table.float('bedtvwerqy');
    table.string('iwlavrtqpg');
    table.text('jcxdmqgluv');
  });
  await knex.schema.alterTable('cqlnfvycyh', function(table) {
    table.integer('lcyzycqxdi');
    table.integer('jhwuievjof');
    table.bigInteger('szuxpokogi');
    table.timestamp('vdcxyyqwct');
    table.float('jcajsdwavz');
    table.json('evxvzgysal');
    table.bigInteger('qwgcqcfdiz');
    table.boolean('bqzsnamhic');
    table.boolean('oatvizqfsn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};