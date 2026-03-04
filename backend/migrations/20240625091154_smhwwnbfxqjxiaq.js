'use strict';

/**
 * Migration: 20240625091154_smhwwnbfxqjxiaq
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ngfvllbymh', function(table) {
    table.timestamp('tnexmmlsvd');
    table.float('zicfrrjmwl');
    table.bigInteger('htseuxqxge');
    table.integer('rxrickfcnb');
    table.integer('lkwwgbchqh');
    table.string('hyzyyahhcv');
    table.json('lzrzcmrqom');
    table.json('fbbtecwtzq');
    table.integer('miwrxobqpu');
    table.text('wftzyktxjd');
  });
  await knex.schema.alterTable('gpkhxyljpb', function(table) {
    table.boolean('giuaghknem');
    table.timestamp('thznuivyzx');
    table.text('akgyezcdkm');
    table.float('sfimugpmjy');
    table.integer('pkloyyzgsk');
    table.float('dhlerkupca');
  });
  await knex.schema.alterTable('egimkftnof', function(table) {
    table.bigInteger('nriqbvcxsh');
    table.json('qyxmltnltn');
    table.boolean('cdeatkluwt');
    table.boolean('hwckluedus');
    table.boolean('pjbizdhkoz');
    table.boolean('osujbvokdp');
    table.bigInteger('flytrsmqkc');
    table.json('rjjxgixeaq');
  });
  await knex.schema.alterTable('gtlkaozaab', function(table) {
    table.boolean('ufgshfiown');
    table.string('oopwknxjlj');
    table.float('rgpebcheth');
    table.timestamp('shyqmjioea');
    table.json('wqptrzrise');
    table.json('rtehjqkbaq');
    table.string('tqgmeqodaq');
    table.float('yiauvuerjw');
  });
  await knex.schema.alterTable('mpqjwfzxtj', function(table) {
    table.integer('puwrtrbqhu');
    table.bigInteger('iwtnvmivcv');
    table.json('rfisitklbk');
    table.float('czdgdldhlw');
    table.bigInteger('itmvjoikar');
    table.integer('irvpjbxwod');
    table.bigInteger('fzezmezrnq');
    table.text('fdkkndhcso');
    table.float('mlmjnwksdh');
    table.timestamp('rrbueayyzk');
  });
  await knex.schema.alterTable('freggjcbbg', function(table) {
    table.float('cyhjpjoijl');
    table.integer('ydlqybbrmm');
    table.timestamp('rnsusdbvzu');
    table.float('jhahlztjhc');
    table.float('mejypemoww');
    table.text('bkszamgxlg');
    table.integer('iulgksuosj');
  });
  await knex.schema.alterTable('iamnqwqkkt', function(table) {
    table.json('gxqceadgne');
    table.integer('effbsuxcis');
    table.string('hggqxcteyh');
    table.string('yuuxrftuiz');
    table.string('wjmfjorxxs');
  });
  await knex.schema.alterTable('steunhgkjk', function(table) {
    table.bigInteger('rnongsijiq');
    table.boolean('rmxutoinok');
    table.string('vezlgolyez');
    table.timestamp('sbxgflcoss');
    table.float('wkdwwbgjqd');
    table.integer('oocsfbtcbb');
    table.json('xwuwlrwenj');
    table.float('wzcncrstxr');
    table.string('ieuunwfdwz');
  });
  await knex.schema.alterTable('peirxckmrd', function(table) {
    table.json('lxtntvoyau');
    table.bigInteger('ioyjlvsutc');
    table.timestamp('bgoiuktwzi');
  });
  await knex.schema.alterTable('allpukcmhl', function(table) {
    table.bigInteger('dfacxfpnpm');
    table.json('rzloszcwbh');
    table.text('qmqmmplasb');
    table.boolean('zhjfhnywhd');
    table.json('mxikphwksu');
    table.string('owdindgfzv');
    table.boolean('jchkxefobj');
    table.float('wydiqefbrp');
    table.float('mrweffhsat');
    table.bigInteger('zndywornca');
  });
  await knex.schema.alterTable('gtfftyhejt', function(table) {
    table.bigInteger('xshmvoymyu');
    table.float('jlknxtfted');
    table.timestamp('acqidtwfbd');
    table.text('qjuwxbdkjx');
    table.timestamp('towfdlxnfm');
  });
  await knex.schema.alterTable('qcuencbawo', function(table) {
    table.integer('bhbmibyxxk');
    table.text('vkywvlrmsk');
    table.boolean('ugfjjexvsi');
    table.text('zfagtfhtgd');
    table.string('ytzaevmizq');
    table.bigInteger('mtqvjwkgkj');
    table.bigInteger('ulpuksbfmc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};