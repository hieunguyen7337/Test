'use strict';

/**
 * Migration: 20240813020635_frofndfnmvqrkea
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pceyycsqrz', function(table) {
    table.boolean('cywtbglaxx');
    table.text('ndsobgdjti');
    table.bigInteger('etfyvyfofj');
    table.bigInteger('pssojdngpv');
    table.text('fikfadunpe');
    table.bigInteger('lhfgcupesn');
    table.bigInteger('xhzopmglow');
    table.bigInteger('osxxwfsqlc');
  });
  await knex.schema.alterTable('jhmoldwujt', function(table) {
    table.timestamp('hheqquqhhl');
    table.bigInteger('jcqsgccwlf');
    table.string('jmyffttdln');
  });
  await knex.schema.alterTable('ixdvzsqfnm', function(table) {
    table.bigInteger('udrjwlvnqu');
    table.string('ybajiwijqm');
    table.integer('vmnquqfjhy');
    table.json('wkvyaetnvj');
    table.timestamp('osfiygrqtz');
    table.bigInteger('yccjmlspqn');
  });
  await knex.schema.alterTable('outcjyvarn', function(table) {
    table.text('luqhxckkcr');
    table.timestamp('hqqvfddnar');
    table.boolean('aosnwttiar');
    table.timestamp('rhsoynegur');
    table.bigInteger('blnelexobe');
    table.integer('iyhfdmmppd');
    table.json('yljxviipzg');
  });
  await knex.schema.alterTable('rrfiximmhz', function(table) {
    table.text('naghhsjxuq');
    table.bigInteger('ecqvunwfbc');
    table.timestamp('uayqqucgcr');
    table.timestamp('hggvyyjyei');
    table.string('bxzvgrxmyl');
    table.boolean('burqhpcmfg');
    table.bigInteger('wesaoplihi');
    table.boolean('xcxlgdokna');
  });
  await knex.schema.alterTable('ofgvscehbn', function(table) {
    table.timestamp('czamjkisyo');
    table.float('ccijzkgnjy');
    table.timestamp('ossikyalsp');
  });
  await knex.schema.alterTable('nnbxtosssi', function(table) {
    table.boolean('eshkjtnduk');
    table.boolean('zayqaakkuq');
    table.text('gdwmxxnfov');
    table.string('orgfanwquh');
    table.string('lbxyntmmdg');
  });
  await knex.schema.alterTable('vmpfbhjvou', function(table) {
    table.integer('nlkctflkaf');
    table.json('cqmvuaycpe');
    table.json('wonwrqnmng');
    table.float('walcqfbbtv');
    table.timestamp('nbbvodhxiz');
  });
  await knex.schema.alterTable('zkammdyick', function(table) {
    table.timestamp('dkjsavxuex');
    table.integer('wffuduldwv');
    table.timestamp('rngbkxjjiv');
    table.bigInteger('nvjdyciwng');
  });
  await knex.schema.alterTable('ugoftbahel', function(table) {
    table.timestamp('xxmwtrkoyd');
    table.string('cnulzolbnu');
    table.timestamp('hymwwnqblm');
    table.string('dposqiamsl');
    table.text('tkmitugyvy');
    table.string('pcyciaxnrk');
    table.integer('xdoflcdktf');
    table.string('gexttzgnkp');
  });
  await knex.schema.alterTable('howfkambsv', function(table) {
    table.text('frhkgaqkrc');
    table.integer('ehfiuwxonu');
    table.string('qbgxfydqzx');
    table.bigInteger('dhsoqlxdsf');
    table.float('bayopschoq');
    table.bigInteger('izsjbfymkb');
    table.timestamp('apjgilgftm');
    table.integer('jrxntbzlsz');
    table.json('trxcyutbhn');
    table.integer('shjmooqgpj');
  });
  await knex.schema.alterTable('wnxxuhcqnp', function(table) {
    table.text('hkqcpwwqca');
    table.string('vtmykwcwdd');
    table.json('fepctjblkh');
    table.boolean('wgabpiszbo');
    table.boolean('quxlwzdppr');
    table.integer('wmxibgvyso');
    table.integer('ftdkmrreol');
    table.float('uimkvzskiz');
  });
  await knex.schema.alterTable('aeyvwqfspq', function(table) {
    table.bigInteger('uybwsbxpig');
    table.boolean('ctkltnijhi');
    table.bigInteger('xzuhnzldwr');
    table.timestamp('ohcjetuzdp');
    table.text('ofmjlxrdsb');
  });
  await knex.schema.alterTable('kureupezfk', function(table) {
    table.timestamp('wzmcbawsoi');
    table.text('zravfctkdq');
    table.integer('trjoefloqj');
    table.timestamp('uujlzeksde');
    table.timestamp('zjwixollhi');
  });
  await knex.schema.alterTable('qqstnijjdk', function(table) {
    table.integer('uguzguwkwn');
    table.bigInteger('uxrypckjpz');
    table.bigInteger('dbuckoizja');
    table.json('nqtgissldr');
    table.text('nxrovjrtzm');
  });
  await knex.schema.alterTable('nrvfqhhfls', function(table) {
    table.json('urwakbbjuw');
    table.timestamp('nsckrpiuos');
    table.string('zamyerdolk');
    table.integer('ppjpfegauo');
    table.bigInteger('iaxnyqttfe');
    table.integer('pghxvrhtcn');
    table.integer('kaomngnhrt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};