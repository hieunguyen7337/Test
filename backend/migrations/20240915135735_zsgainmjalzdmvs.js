'use strict';

/**
 * Migration: 20240915135735_zsgainmjalzdmvs
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('sgmrgconym', function(table) {
    table.integer('qwdtohawqf');
    table.bigInteger('zhvedzpwrw');
    table.string('rsjjsjpfhe');
    table.text('pchupuotwo');
    table.text('iqguhxeggo');
  });
  await knex.schema.alterTable('dffoempyev', function(table) {
    table.timestamp('vhqdxsocvg');
    table.timestamp('ivqaxgybfr');
    table.json('htvuwjfmbd');
    table.boolean('cftzscziwd');
    table.timestamp('lpobqbotyr');
  });
  await knex.schema.alterTable('jcaetytgbn', function(table) {
    table.text('ufvskmhljs');
    table.string('beuwchwjlh');
    table.text('udyaxtrbqc');
    table.boolean('dgujkznnwb');
    table.string('vwfbkzpcyk');
    table.integer('oquzixtihk');
    table.bigInteger('tednlveida');
    table.string('eoazhytwzt');
  });
  await knex.schema.alterTable('rnvimfgoeo', function(table) {
    table.text('hnvqvcxiyx');
    table.text('ibmluuslhw');
    table.integer('dtugludmse');
  });
  await knex.schema.alterTable('sickwanpas', function(table) {
    table.string('anlyfdttzh');
    table.boolean('gcufgmdjyj');
    table.json('noccpycpyn');
  });
  await knex.schema.alterTable('hthkxuvobi', function(table) {
    table.string('zxjrrleqnl');
    table.boolean('nuijblfgfl');
    table.json('biajxsiedc');
    table.bigInteger('ckirccrfri');
    table.float('scanumpudx');
    table.bigInteger('pmtualefsb');
  });
  await knex.schema.alterTable('wxwidzdvyr', function(table) {
    table.boolean('rivqrnxhwq');
    table.text('gczlxjzcfv');
    table.integer('opgbnslncm');
    table.json('gmbrdlppmc');
  });
  await knex.schema.alterTable('oracypfpns', function(table) {
    table.integer('bjvbfearpz');
    table.boolean('ubctqfjdpg');
    table.json('yufikaocdx');
    table.string('oxdqdtmori');
    table.bigInteger('jibudoaffz');
    table.json('nqpylzvekj');
    table.json('kumnuhrxac');
  });
  await knex.schema.alterTable('gzjgtvyjjr', function(table) {
    table.text('accddrfces');
    table.bigInteger('kleloiolpy');
    table.bigInteger('gteffkfzfj');
    table.float('amfekmocmc');
    table.string('znabltieje');
    table.float('fyqfuztuqn');
    table.json('wiputhebwm');
  });
  await knex.schema.alterTable('rxrvyodumq', function(table) {
    table.boolean('ljrmewqbvd');
    table.float('ictatgysbr');
    table.bigInteger('ytnrjcgamc');
    table.json('daceqjzrnh');
  });
  await knex.schema.alterTable('lucwquqdnv', function(table) {
    table.integer('cpokcpaaqj');
    table.timestamp('qgzihxdqew');
    table.bigInteger('ldcmkwhavr');
    table.timestamp('occtllvqkm');
  });
  await knex.schema.alterTable('abdloeflzf', function(table) {
    table.json('gkbgzcstpb');
    table.boolean('yfrxcksqey');
    table.json('geavxhspcc');
    table.bigInteger('ftymclzxfu');
    table.float('hkryeifads');
    table.float('jxbshodxio');
    table.timestamp('cbbvekoqpp');
  });
  await knex.schema.alterTable('rsdxupyqmn', function(table) {
    table.json('fezazdabbz');
    table.text('eksgmjonbh');
    table.boolean('dzxiipvlau');
    table.bigInteger('cybyezwibl');
    table.text('gvgzthjoko');
    table.timestamp('mctnquwurd');
    table.string('eqwnjudqgk');
    table.string('ojyabsjknd');
  });
  await knex.schema.alterTable('gafqufvumo', function(table) {
    table.integer('dxipmxdqal');
    table.float('pabusaciou');
    table.json('nbrttgmdrq');
    table.bigInteger('qitptyrsfl');
    table.json('cvldjxelfc');
    table.string('xkwyzdejus');
  });
  await knex.schema.alterTable('ttjjoenjtv', function(table) {
    table.bigInteger('aafnuhmvjm');
    table.json('wvbbvansxe');
    table.text('fyydzexthe');
    table.integer('kyxvqojglz');
    table.float('rgxpdnqjuu');
  });
  await knex.schema.alterTable('wsiiyfvbeg', function(table) {
    table.bigInteger('zfznizwzsj');
    table.boolean('asxysvxhyu');
    table.float('hexrbuynus');
    table.json('cdaooyhocq');
  });
  await knex.schema.alterTable('qovnkavpsj', function(table) {
    table.timestamp('qljpjzsuiz');
    table.string('lwltnexgfe');
    table.boolean('miqcrdkauf');
    table.string('jvojfsomjg');
    table.integer('hrkqlxjbxm');
    table.timestamp('allnbmuhcd');
    table.float('pfggsdfulu');
    table.text('vpbthdmzif');
    table.text('nvfcetcvfs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};