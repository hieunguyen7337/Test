'use strict';

/**
 * Migration: 20240120221643_hothuxcdlhxsfbl
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('caxpbzvlyx', function(table) {
    table.integer('sdpxvfpvzl');
    table.float('ozzyfepybs');
    table.timestamp('qjfextqebx');
    table.string('uzuwtavykx');
    table.boolean('qjbyqqthju');
  });
  await knex.schema.alterTable('npigomuwsl', function(table) {
    table.string('cypacblwxa');
    table.string('sirvwvujsv');
    table.boolean('ukcuqvopwt');
    table.timestamp('tfbiouwdkl');
  });
  await knex.schema.alterTable('byhcwyklvw', function(table) {
    table.bigInteger('odftrafdbt');
    table.json('edrckppxxx');
    table.float('mnveoiggeh');
    table.timestamp('bddwfxwnmi');
    table.boolean('ibkvwnyeqj');
    table.string('eljmoyomyn');
    table.string('ffcblpibhn');
  });
  await knex.schema.alterTable('wkcqzognsr', function(table) {
    table.integer('jgemflrrjx');
    table.text('lgyzbyimpm');
    table.boolean('btnsvphjfc');
    table.bigInteger('tuaaukcbps');
    table.boolean('nnrwpnmfpk');
    table.float('oglmhcuwuv');
    table.bigInteger('cpczwhobyh');
    table.json('hdysoiipos');
    table.timestamp('xhnspkvura');
  });
  await knex.schema.alterTable('sbwqbbywnc', function(table) {
    table.text('nxhoqbbnts');
    table.float('gtajsjuniv');
    table.timestamp('lqtowhlzji');
    table.float('mtgvwqqhyw');
    table.float('surhlfiwuw');
    table.timestamp('eavqwaaofk');
  });
  await knex.schema.alterTable('xfdwqlqbuf', function(table) {
    table.integer('uqqhhwwkdo');
    table.text('yutrvgrixt');
    table.text('nmwgrwptjt');
    table.boolean('anpxdkttdu');
    table.boolean('frudpuqkzn');
    table.integer('qvfnoisris');
    table.integer('zuzehozqne');
    table.json('pprlspazqd');
    table.float('hfdzidkjfz');
    table.timestamp('pndolkdlqs');
  });
  await knex.schema.alterTable('nxmvmivzmc', function(table) {
    table.bigInteger('ehvlowrivp');
    table.bigInteger('yofctxnpzj');
    table.float('xpvoqqbugq');
  });
  await knex.schema.alterTable('bbkqsifcrg', function(table) {
    table.timestamp('ckrnrpjiai');
    table.text('tjiixctvig');
    table.float('sczvpzvjeh');
    table.integer('ctlwjtmihi');
    table.integer('vepsnximpq');
    table.text('fnodboiada');
  });
  await knex.schema.alterTable('txanybqiwd', function(table) {
    table.integer('hanuzwzrlr');
    table.json('wevcysikwp');
    table.float('cuxuqdskkj');
    table.bigInteger('nqvcfonnvg');
    table.float('lyldpadusu');
    table.string('ekdgungexn');
  });
  await knex.schema.alterTable('dljdfjtore', function(table) {
    table.float('ebjzqddpnl');
    table.bigInteger('ijirggvdlm');
    table.text('iqxaaqlffw');
    table.timestamp('kcevhwiyqn');
    table.bigInteger('bgxprkbzoi');
  });
  await knex.schema.alterTable('ahnsgmexwz', function(table) {
    table.boolean('qvnsqtrdxp');
    table.string('uqsbwbvmwq');
    table.float('ckutqsdwck');
  });
  await knex.schema.alterTable('umicphtcrt', function(table) {
    table.integer('pprtgmimmp');
    table.timestamp('fybpihgzrd');
    table.text('trdeohcxjt');
    table.text('xulxfmhtim');
    table.timestamp('vvtrxhsgqi');
    table.text('fgkoufrluz');
  });
  await knex.schema.alterTable('newuwkqzuj', function(table) {
    table.json('qroxvmwwpk');
    table.string('tctbkzffjz');
    table.timestamp('xlmdedsbfq');
    table.timestamp('jrrhqvpzer');
  });
  await knex.schema.alterTable('ortwglvbgv', function(table) {
    table.float('syjvuclusj');
    table.boolean('kejeiuongq');
    table.integer('oglfeovwuq');
    table.text('vmpiggujey');
    table.timestamp('plhoaatypo');
  });
  await knex.schema.alterTable('qmzlidpylc', function(table) {
    table.integer('ekypzgayqy');
    table.bigInteger('npltqkidce');
    table.boolean('cyejajqcps');
    table.timestamp('juzlubcmdz');
    table.string('ndcivhqvfh');
    table.json('pxxnvkceok');
    table.json('doqlwjrgtw');
    table.text('egfnwdsros');
  });
  await knex.schema.alterTable('jolqyieawf', function(table) {
    table.timestamp('oervimyesm');
    table.json('msarygavgz');
    table.text('bfgfkwtxar');
    table.text('scjaclxqbu');
    table.bigInteger('ohgmdffkrc');
    table.float('jxjnpjkuny');
    table.json('fbcadjfwnr');
    table.float('iugneyqzbj');
    table.float('ikgbaqpmzm');
  });
  await knex.schema.alterTable('tbtpmwirlw', function(table) {
    table.string('yjiboclfxi');
    table.boolean('grzgtftxzu');
    table.timestamp('xxoodxjoux');
    table.float('lgceixgssl');
    table.integer('mcusrhcgnr');
    table.string('ilkffvwngj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};