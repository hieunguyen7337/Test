'use strict';

/**
 * Migration: 20240111093048_nsynpptlhoftdra
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('imviyynubu', function(table) {
    table.json('hfdnkuqlio');
    table.json('ovvpeqkahb');
    table.bigInteger('speigvudvr');
    table.string('zgisilkwlp');
    table.boolean('mpopdmfqic');
    table.boolean('jsluiavjib');
    table.boolean('xlisrbvhio');
    table.boolean('zbkecaajbi');
    table.boolean('byelclrjws');
  });
  await knex.schema.alterTable('xunhrcjfvq', function(table) {
    table.text('arlzjkcxxx');
    table.float('uczwxoybux');
    table.string('tenjxmjcmp');
    table.json('hbrpplkbdw');
    table.timestamp('qpdjlhcryh');
    table.float('xbojlnqisq');
    table.float('byfcbzwyln');
  });
  await knex.schema.alterTable('cmbsswshkm', function(table) {
    table.string('mrugcvfqwq');
    table.timestamp('gwrtztfvrs');
    table.bigInteger('dvchfuoazm');
    table.timestamp('btljuywabr');
  });
  await knex.schema.alterTable('ngitmbrgxr', function(table) {
    table.text('aefjifcixh');
    table.bigInteger('krhcqdcjad');
    table.bigInteger('kbqnkrcrqc');
    table.string('xwndmsrnbo');
  });
  await knex.schema.alterTable('gguuktbjun', function(table) {
    table.boolean('dxnkdlortv');
    table.timestamp('tghnfctast');
    table.integer('qvihdvsvxz');
    table.json('qytqprbslg');
  });
  await knex.schema.alterTable('bwrnefwtar', function(table) {
    table.text('aipyrozfvl');
    table.timestamp('igzrzbzonc');
    table.json('dtcjyxeiyu');
    table.json('blzrqcwngh');
    table.text('eaveitqqnb');
    table.float('lnmuzfqmkj');
    table.string('nrshzvzzwr');
    table.float('fxurciazvz');
    table.string('kfyqbgpmsr');
  });
  await knex.schema.alterTable('xqpyrltoln', function(table) {
    table.boolean('lufsxbnmdp');
    table.integer('sioktwcszq');
    table.boolean('duoyhkcoqy');
    table.text('hrlyqixabq');
    table.boolean('erenoksdya');
    table.text('cpsgumphzt');
    table.bigInteger('doanabzuip');
    table.text('vurmfzbwnf');
    table.timestamp('xikpeukugk');
  });
  await knex.schema.alterTable('bjrjztbydc', function(table) {
    table.text('ebcjsgtikj');
    table.bigInteger('ggauvoumeh');
    table.float('evpapdgfne');
    table.bigInteger('fystzdigei');
    table.string('vslfmyetcc');
    table.json('tsgkjyvvge');
    table.timestamp('gqzkdqsate');
    table.bigInteger('ksaybftsxa');
    table.integer('hisdtmmdxw');
  });
  await knex.schema.alterTable('yxrwpybshm', function(table) {
    table.float('qybogrgkwn');
    table.text('kzmixhweno');
    table.integer('exngatsluk');
    table.float('gpzbldvium');
    table.float('xlayolkxrp');
    table.string('gjqrtmeupa');
    table.bigInteger('hrrhfiryhw');
    table.timestamp('onnxumxfjy');
    table.boolean('rkvlpzdurq');
  });
  await knex.schema.alterTable('wmrrmgozvu', function(table) {
    table.integer('svjeyjxysp');
    table.text('tzixatlbnk');
    table.boolean('pelvxajcsf');
    table.json('swklaglkos');
    table.timestamp('kojpmibwyv');
  });
  await knex.schema.alterTable('ijdygmogwo', function(table) {
    table.float('ckaotfusub');
    table.boolean('vqglcrwzep');
    table.bigInteger('baxlfnpdgt');
    table.text('udhhywuovy');
  });
  await knex.schema.alterTable('pmypaiucmh', function(table) {
    table.text('ymwlfxpygp');
    table.timestamp('hzhzhbjqzz');
    table.integer('osbohtvczi');
    table.string('fxpvrtgxkq');
    table.json('tcrfthofmr');
    table.integer('jpjmllmheo');
    table.integer('ezcvsgodrq');
    table.bigInteger('zpqdzrmrld');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};