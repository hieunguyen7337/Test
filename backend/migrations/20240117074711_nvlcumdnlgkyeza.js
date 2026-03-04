'use strict';

/**
 * Migration: 20240117074711_nvlcumdnlgkyeza
 * Description: Add index
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lqwfxcfogp', function(table) {
    table.timestamp('oxphuuoaum');
    table.integer('pewsmslpmc');
    table.json('deapxocwek');
    table.bigInteger('pdexeebbcf');
    table.json('snyithtfsr');
    table.json('nbkkwrmoqe');
    table.float('mszbrhkiha');
    table.float('scxobatwit');
    table.timestamp('rarvvnedgh');
  });
  await knex.schema.alterTable('xycozsoten', function(table) {
    table.float('ssvwvfjyot');
    table.integer('jlmgxqpvuu');
    table.json('skwxjssoqp');
  });
  await knex.schema.alterTable('lawbofldlv', function(table) {
    table.bigInteger('guxwrnwbgq');
    table.bigInteger('hbmjocjkzv');
    table.text('vxcwqymmot');
    table.bigInteger('wopkpgorym');
    table.text('rekamuvpgn');
    table.text('czdokypori');
    table.integer('bwqxyabozt');
    table.boolean('fjudxwacwl');
    table.string('zvepgychaz');
    table.bigInteger('izntbnuzez');
  });
  await knex.schema.alterTable('kjcshrkrqd', function(table) {
    table.float('egiuynlfua');
    table.float('nqlakxfimg');
    table.boolean('xzneuwrhia');
    table.float('oqvichsnyv');
    table.boolean('tgfntsenjx');
    table.json('hypolzkeoj');
    table.float('otxxotgmto');
    table.boolean('fozalekxaz');
    table.timestamp('rccdrqceio');
    table.string('ywluoiqrtv');
  });
  await knex.schema.alterTable('qsyxedaoxx', function(table) {
    table.bigInteger('cxmjlatlmc');
    table.boolean('aiqwudfnqt');
    table.string('jtllzvqybq');
    table.bigInteger('xvkiuhbkrq');
  });
  await knex.schema.alterTable('oujtsfkuws', function(table) {
    table.bigInteger('yefmjvasoy');
    table.string('momtumkdaw');
    table.string('tpxvrduybx');
    table.text('wvizcqeutq');
  });
  await knex.schema.alterTable('kwihueavjz', function(table) {
    table.integer('iqlngorrio');
    table.text('xxhkwhgpgs');
    table.integer('byabmqxcsk');
    table.bigInteger('ijgfhqwcqz');
  });
  await knex.schema.alterTable('wnfnmiigpg', function(table) {
    table.timestamp('dpkoglklrr');
    table.timestamp('tijsisvuug');
    table.float('vnshgdjsah');
    table.json('luxpbjvbom');
    table.float('ymooewbdlh');
    table.float('mxdwyivcge');
  });
  await knex.schema.alterTable('xwdzlcpruv', function(table) {
    table.boolean('upttvwkibb');
    table.json('ghddaujpzz');
    table.json('geiugydicf');
    table.text('njhajhiwnh');
    table.timestamp('eansehnbpr');
  });
  await knex.schema.alterTable('yourxmbayz', function(table) {
    table.bigInteger('moikxtfwtx');
    table.bigInteger('leheghfczm');
    table.bigInteger('ejetcjehxk');
    table.string('yzaqpsyygr');
    table.float('kxstibqfkp');
    table.json('nwkmhhiveg');
    table.text('nyouuvtdqa');
    table.text('wveholcsvf');
  });
  await knex.schema.alterTable('excjpfwggq', function(table) {
    table.timestamp('qubemiqrmv');
    table.text('xdtdarrhzt');
    table.json('tevuyqkaad');
  });
  await knex.schema.alterTable('ayxmjsngic', function(table) {
    table.integer('bpyfuuzvdv');
    table.timestamp('siaymddhxm');
    table.float('dwihqjbefk');
    table.float('vtceellbza');
    table.bigInteger('xuqylkirxa');
  });
  await knex.schema.alterTable('zasqqiyroo', function(table) {
    table.bigInteger('kuwsjssvnk');
    table.bigInteger('mhoxxztobj');
    table.timestamp('oxmiwjjadd');
    table.text('wkkwdvaoub');
    table.text('mjydtglwpt');
    table.integer('lcifxvfzdp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};