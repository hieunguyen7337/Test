'use strict';

/**
 * Migration: 20240415130030_xjamhbnswjyvywh
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('syaknwwlia', function(table) {
    table.bigInteger('hwzvkprynu');
    table.timestamp('tozhhmzyuh');
    table.bigInteger('dbrpygqwhk');
  });
  await knex.schema.alterTable('dmztxipcen', function(table) {
    table.timestamp('cnlveewykq');
    table.bigInteger('nertwmscrg');
    table.bigInteger('ispuoxikoi');
    table.boolean('ktotchzfjl');
    table.float('fktnllejvn');
    table.integer('nqgxicocfd');
    table.boolean('chfzltwmxc');
    table.text('hgqxhkuayn');
  });
  await knex.schema.alterTable('cztydudbqz', function(table) {
    table.string('uumzaknhju');
    table.text('sziiryzosh');
    table.float('zttwbxohcu');
    table.string('ffyneeyggw');
    table.float('gfttwxlzhi');
    table.bigInteger('roqtforhce');
    table.float('vvrlirylct');
    table.text('hkeuhlrwrc');
    table.string('skrkifmzlk');
    table.bigInteger('lyxquxlobz');
  });
  await knex.schema.alterTable('riipxeqrzc', function(table) {
    table.float('bkztxjdibe');
    table.integer('ryjxfoehvr');
    table.string('vdjcuxcovm');
  });
  await knex.schema.alterTable('hppxebrnjw', function(table) {
    table.string('fwqpqmzerv');
    table.json('meqdutfciq');
    table.string('rhygeqdfgo');
  });
  await knex.schema.alterTable('yejxprbpel', function(table) {
    table.json('uatjveppnb');
    table.float('tkqaijwogy');
    table.text('uqkixbhzpl');
    table.json('dvubbdzila');
  });
  await knex.schema.alterTable('deasebzdzw', function(table) {
    table.bigInteger('oatwzcorvo');
    table.integer('zizxtmbmsh');
    table.boolean('thciuovlel');
    table.float('nnmerdqzzg');
    table.boolean('hwxzhdxway');
    table.float('hfylodvhwq');
    table.timestamp('sfconunpnj');
    table.text('vlzkkczrbt');
    table.float('obmfgwpulu');
    table.text('hplnbzmpgy');
  });
  await knex.schema.alterTable('zmpdaysbsn', function(table) {
    table.text('aojftlrild');
    table.json('tbhtuszljy');
    table.integer('ulkloldtug');
    table.boolean('emyakolsit');
    table.json('vyhlvshvqm');
    table.json('ztmgvjfxbz');
    table.integer('yynwngpitc');
    table.text('tzdvoqxbgy');
  });
  await knex.schema.alterTable('vgaglftrbp', function(table) {
    table.boolean('cyywgyctiz');
    table.integer('gdfvvhqoak');
    table.timestamp('kcweibcgtx');
  });
  await knex.schema.alterTable('kdkgegqupu', function(table) {
    table.text('ngdnduzjxv');
    table.float('ghivzwcvcc');
    table.bigInteger('uhncbwmwbb');
  });
  await knex.schema.alterTable('ezzzkijozp', function(table) {
    table.integer('osjmvblmqm');
    table.json('rmhxtcpwhr');
    table.integer('vdksnpdhnk');
    table.string('feslunwbig');
  });
  await knex.schema.alterTable('xgoctbhyrx', function(table) {
    table.text('lrrkawcyyx');
    table.text('fkiqylwyii');
    table.text('zmtyeuspoz');
    table.boolean('tdtdloqvjd');
    table.integer('dljqqvpnrs');
    table.json('dgtpicabwl');
    table.json('xudybtwrta');
    table.string('yuioscvzom');
    table.timestamp('fcbblsjasm');
  });
  await knex.schema.alterTable('uavsnecgkt', function(table) {
    table.boolean('wybwsxydyv');
    table.json('tevyqdbucc');
    table.boolean('vqzarrqrzk');
    table.boolean('gwrlqfswlc');
  });
  await knex.schema.alterTable('otwpmfamoe', function(table) {
    table.string('pmvhpcasin');
    table.integer('swnzinfstt');
    table.string('ixbpdgyptx');
  });
  await knex.schema.alterTable('gzyvpqfclr', function(table) {
    table.string('xqaltcvkdf');
    table.json('qubfkhfklo');
    table.bigInteger('ncgtaevtxd');
    table.float('uqlcargorl');
    table.bigInteger('xjlgxptxfs');
    table.float('aqxsikrlrm');
    table.text('fbxcnfdamj');
    table.float('hsomapwjmk');
    table.text('yjdhmvgotl');
  });
  await knex.schema.alterTable('teuhgvjmls', function(table) {
    table.boolean('dcyycotvab');
    table.text('ufvnppjzvw');
    table.string('bytmljxakt');
    table.boolean('bytoqnetsq');
    table.integer('zwwrbukhsf');
  });
  await knex.schema.alterTable('rymzntqnra', function(table) {
    table.boolean('vjrybxgwkg');
    table.integer('epfwwsdqgg');
    table.string('djojdyvtan');
    table.float('swmndtuuwr');
    table.bigInteger('sasizhwoew');
    table.boolean('byqobjgamt');
    table.string('ulynlodnfm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};