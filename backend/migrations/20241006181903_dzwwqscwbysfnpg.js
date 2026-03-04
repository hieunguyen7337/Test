'use strict';

/**
 * Migration: 20241006181903_dzwwqscwbysfnpg
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('twkatwzvad', function(table) {
    table.timestamp('nqrlvguxec');
    table.text('xwyzgwemyl');
    table.json('eddlpdaoct');
    table.timestamp('bozroxwbbe');
    table.json('kdclecxebm');
    table.bigInteger('jnsvnecsrv');
    table.timestamp('isfxxsnvfk');
  });
  await knex.schema.alterTable('lvmjfmadwa', function(table) {
    table.integer('rhapevgtoq');
    table.bigInteger('reejrymxph');
    table.string('brfwfkwwko');
    table.boolean('onarzpcool');
    table.json('mrlwtkoert');
    table.float('vepjfztzdy');
  });
  await knex.schema.alterTable('ngiizgyprz', function(table) {
    table.bigInteger('dgdhtxwdxi');
    table.string('fkejunyxyh');
    table.string('soycxmpsge');
    table.json('bkxpngnwzg');
    table.bigInteger('xttwjzmmma');
    table.timestamp('bxspoyahnn');
    table.boolean('twejllhaqd');
    table.json('yppkkbouqo');
    table.string('lkxzniltbk');
    table.float('llarpjozxo');
  });
  await knex.schema.alterTable('nbkchweyrz', function(table) {
    table.boolean('ewfoucgyts');
    table.text('jmmfjxaaaw');
    table.bigInteger('hsslajutox');
    table.integer('rizspclymt');
    table.json('rcplmtisbo');
    table.json('hrcllnsqrh');
  });
  await knex.schema.alterTable('vafultromi', function(table) {
    table.timestamp('xnhlecoeft');
    table.float('hsjtxzmvon');
    table.string('gqqokhjpuu');
    table.string('xiiovbqnlg');
  });
  await knex.schema.alterTable('qmndetngxe', function(table) {
    table.timestamp('aqwycoljrr');
    table.timestamp('ipwmdqoykx');
    table.boolean('tcapopwmmq');
    table.bigInteger('oqaadtgxuj');
    table.bigInteger('aiyxlfmacy');
    table.bigInteger('ivqktxcuuz');
    table.text('drvcieluwy');
    table.timestamp('pypcghjrdr');
  });
  await knex.schema.alterTable('zvgoktayga', function(table) {
    table.bigInteger('qauamadnod');
    table.boolean('sykmsoivyo');
    table.float('lvctlynbqf');
  });
  await knex.schema.alterTable('qhxhxcrbvz', function(table) {
    table.json('dnrizboxnw');
    table.text('cewhourxnj');
    table.integer('furkquyjmc');
    table.timestamp('fyjjdcifqt');
    table.float('bwepuyztst');
    table.float('pwoykvffze');
    table.bigInteger('wylxxtxjci');
    table.timestamp('llhjzdmewh');
    table.bigInteger('kbodexdmeh');
    table.text('qaeukopsya');
  });
  await knex.schema.alterTable('zcjfypqbao', function(table) {
    table.boolean('njdtygbmhf');
    table.timestamp('iwwmbyersi');
    table.timestamp('ohsnawlcyl');
    table.text('okacgfzucq');
    table.string('orirscnyfo');
  });
  await knex.schema.alterTable('eismumhpdo', function(table) {
    table.float('ffztgscwtt');
    table.float('zpbtaioany');
    table.text('wuauirejaq');
    table.json('vdvshmymcz');
    table.boolean('nxpznzzefq');
    table.string('exbbdqnbat');
    table.bigInteger('vzevsrbpjq');
  });
  await knex.schema.alterTable('gpfjfuarwq', function(table) {
    table.float('xbaiqgngfv');
    table.json('zivatvcrwe');
    table.string('qtwgtedqgf');
    table.boolean('zjgurjvocv');
  });
  await knex.schema.alterTable('hhrfsivoqx', function(table) {
    table.timestamp('mcdsqjbfvn');
    table.integer('nddsgpsijt');
    table.text('ensybtwvau');
    table.timestamp('wkqdzsasvd');
    table.text('lwhqpgyrfc');
    table.float('fbhvwexxve');
    table.timestamp('tvtalvifre');
    table.boolean('aqpcrfkjte');
    table.text('exjrveivof');
    table.string('jsffrcxfnx');
  });
  await knex.schema.alterTable('rlmmfznhkb', function(table) {
    table.bigInteger('runifrngue');
    table.string('gmjbeynahp');
    table.timestamp('vqfaoswkvh');
    table.text('etirhlchus');
    table.string('bfajdcvmyl');
    table.boolean('lgnocttuqp');
  });
  await knex.schema.alterTable('pyvyvlnkve', function(table) {
    table.json('mhtojczqlk');
    table.integer('hkoucxwnat');
    table.integer('euzbjejzji');
    table.string('eckoezqaad');
    table.json('nahkgbdkpa');
  });
  await knex.schema.alterTable('hykueljisn', function(table) {
    table.json('lnarryhtlw');
    table.bigInteger('izpeqhchuz');
    table.json('mljefpcoem');
    table.text('qitnhabsyy');
    table.timestamp('vzbtaxbclp');
    table.integer('yrtxgvcadh');
    table.bigInteger('bgtypyoljl');
    table.integer('wnazqfasfz');
    table.boolean('gkmomojgpw');
  });
  await knex.schema.alterTable('gchoqefqti', function(table) {
    table.string('iykjcjwora');
    table.json('wcktvgwthh');
    table.bigInteger('ncfjsnvzxh');
    table.json('liiquprada');
    table.float('qrvtvkbxcb');
    table.bigInteger('gzinmyztms');
    table.boolean('tdxplloqfc');
    table.json('zsepgzrapm');
    table.json('ivkxjhqrdq');
    table.json('xafszkkgwg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};