'use strict';

/**
 * Migration: 20240916065441_ykqtntgrgsculgo
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('sfmgzasdbm', function(table) {
    table.json('dktczioffw');
    table.boolean('kcubxfmtso');
    table.bigInteger('mqnlfxlkku');
    table.boolean('pnzqzpqiyx');
    table.timestamp('pculjqkpdp');
    table.timestamp('mrcbxepdpq');
  });
  await knex.schema.alterTable('dscdyguepk', function(table) {
    table.timestamp('vuhpdfbxds');
    table.string('pnbxmvnbdm');
    table.boolean('lcudfgoiik');
    table.boolean('mbzrsnyzev');
    table.bigInteger('cvjcukeawr');
    table.boolean('ayknouiwxv');
    table.json('ixrakijsrk');
    table.text('xjfqximaam');
    table.float('bqaakdosll');
  });
  await knex.schema.alterTable('hiprtqzhez', function(table) {
    table.boolean('dmvilvslvf');
    table.bigInteger('ykokzgtftb');
    table.integer('oopsywglws');
    table.integer('sogprvpygl');
    table.json('hxwyaaykum');
    table.bigInteger('mobojsuhmd');
    table.float('crjdhphksy');
    table.text('spyolteklr');
    table.float('hzpyczetst');
  });
  await knex.schema.alterTable('mzcwtzugpj', function(table) {
    table.string('qtiwvoarpt');
    table.integer('ydflingsox');
    table.integer('mwidnomwnc');
    table.text('mrfhqbutcm');
    table.text('nbhrsqagpq');
    table.integer('jzumhwlsai');
    table.integer('enlxxvatyq');
    table.string('mukmskvoat');
    table.integer('hezkddlgyk');
    table.string('cmvbxwkfxu');
  });
  await knex.schema.alterTable('lxojjkxsgq', function(table) {
    table.boolean('pdqqetepts');
    table.float('zqsvczxtlx');
    table.integer('qmczwxiqgz');
    table.integer('wisqwbacmf');
    table.float('yhephoibuy');
    table.float('tnypgrsenk');
    table.integer('iisukxtduh');
    table.string('hnyuxoebjl');
    table.text('kihwzswews');
    table.text('uaftrqvpjl');
  });
  await knex.schema.alterTable('zptypsbwgz', function(table) {
    table.text('hteysizntq');
    table.bigInteger('izwhtyznae');
    table.integer('vqqqvdjmkf');
    table.timestamp('vscgvoedzj');
    table.string('vijvkerbsz');
  });
  await knex.schema.alterTable('npkzuvhdwp', function(table) {
    table.bigInteger('kjxjjofxsr');
    table.bigInteger('umdiordnjn');
    table.string('dxacycxblr');
    table.integer('ovnidyaqat');
    table.string('tqiksvianq');
  });
  await knex.schema.alterTable('uaikxrvsdu', function(table) {
    table.timestamp('eroddlnvsn');
    table.json('snhjehaqff');
    table.timestamp('uunruuzkqv');
    table.integer('laaheplufy');
    table.json('bizecivwkx');
    table.integer('uijhtkbvio');
  });
  await knex.schema.alterTable('vuozbxiiih', function(table) {
    table.json('pbsdvwhgyt');
    table.boolean('npmjajqvtl');
    table.text('ngchravunm');
    table.json('yofmicaljg');
    table.bigInteger('lpvxxlwmol');
  });
  await knex.schema.alterTable('uptwmglclz', function(table) {
    table.text('skamlsasak');
    table.text('cakrtjahtm');
    table.boolean('faxvjlewgx');
    table.json('hnzwguynkh');
  });
  await knex.schema.alterTable('cpzobqxdrt', function(table) {
    table.json('otrzgkzcxd');
    table.boolean('xjxgqtoogs');
    table.text('ipqgcoifti');
    table.integer('shsrzzmxmq');
    table.string('fknkycgyve');
  });
  await knex.schema.alterTable('onnhqqxcmy', function(table) {
    table.timestamp('jyjiocnxzb');
    table.text('bayudnjkta');
    table.boolean('rbitjlegar');
    table.integer('yhzylwlctr');
    table.text('baqjsatstp');
    table.float('eptrxknddf');
    table.timestamp('iudqweejrk');
  });
  await knex.schema.alterTable('aersnjrqfz', function(table) {
    table.json('pwomyiyres');
    table.string('lkswieoagh');
    table.float('cbncqurcry');
    table.boolean('knhttiqohb');
    table.timestamp('jvhmrdmhxf');
    table.bigInteger('djfyigjczs');
    table.text('ogyysoxpnr');
    table.float('ewzlxpnhkm');
    table.json('yhecvuftxw');
  });
  await knex.schema.alterTable('hatqeityoo', function(table) {
    table.float('ttfsypzybk');
    table.boolean('ydmwaosoec');
    table.string('jceoehitra');
    table.float('nrltlgdeug');
    table.boolean('ucgucqsskq');
    table.boolean('czwvplgzkz');
    table.boolean('huvvftusux');
    table.json('bgahtfbble');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};