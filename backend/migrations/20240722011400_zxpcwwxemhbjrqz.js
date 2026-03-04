'use strict';

/**
 * Migration: 20240722011400_zxpcwwxemhbjrqz
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nghypjwfcq', function(table) {
    table.integer('ayxfigrlqd');
    table.integer('bnqqreldwe');
    table.timestamp('ujruxmtjab');
    table.integer('csgvvcjybd');
    table.integer('lgmjriurhu');
    table.boolean('tmroppqugr');
    table.boolean('ozumkwpegj');
    table.bigInteger('srucduljlv');
    table.boolean('fesdpeovln');
    table.bigInteger('rwdpncipgj');
  });
  await knex.schema.alterTable('ujkkthywqv', function(table) {
    table.boolean('mbqxgjmedq');
    table.integer('asbphowiwq');
    table.bigInteger('dtlovejwyj');
    table.bigInteger('nlstpxsxal');
    table.boolean('mhdnkpbpbu');
    table.timestamp('azlktymjac');
    table.timestamp('jxatsmfupq');
    table.timestamp('asqxrjjabj');
    table.integer('zfswjdbsfo');
  });
  await knex.schema.alterTable('bgtbmpsbha', function(table) {
    table.boolean('ecwxgruqkb');
    table.string('cnsdnyjnih');
    table.json('svlhfylsoi');
    table.text('adbvpkhhjs');
    table.text('cubivgdjkm');
    table.bigInteger('czuzjxcouu');
    table.timestamp('picejddxak');
    table.string('rhlrqxeowo');
    table.json('taddlfcxmi');
    table.string('fndkytekpp');
  });
  await knex.schema.alterTable('wrmaojiqwj', function(table) {
    table.integer('usepvivayd');
    table.text('zkllshpoty');
    table.timestamp('xdumppppbx');
    table.string('nijrbcssea');
    table.integer('hwxihollil');
    table.float('sngyxdcgpd');
    table.float('urnbwricsg');
  });
  await knex.schema.alterTable('uxfuygicml', function(table) {
    table.bigInteger('jetmuqiasn');
    table.bigInteger('sweksdqngi');
    table.boolean('drlnqibpja');
    table.float('pxvfhhzcbv');
  });
  await knex.schema.alterTable('hehbpbgxji', function(table) {
    table.integer('nbfrutbllx');
    table.timestamp('mokukgjtvm');
    table.boolean('oayffduxsf');
    table.bigInteger('qyouqzijln');
    table.float('lrqymjqmjq');
    table.bigInteger('gvoozbcxlg');
  });
  await knex.schema.alterTable('wyvoxzysua', function(table) {
    table.json('zdaqleddcc');
    table.string('vvqdrheueb');
    table.json('azmhtkqszr');
    table.float('twhjczrckx');
    table.text('kfhbetwetn');
    table.string('hcawxizjsd');
    table.integer('wnamttuvnl');
    table.string('aoqjgftvkb');
  });
  await knex.schema.alterTable('krxsulscae', function(table) {
    table.integer('xlonbyyqpr');
    table.integer('joinwlgwru');
    table.float('qilralgfja');
    table.float('qjawcprnyl');
    table.float('gbttpgmcko');
    table.float('ffonasibex');
    table.text('xwyazxzgjo');
    table.boolean('nxmabspfig');
    table.boolean('ecgqwzyyfx');
    table.bigInteger('pvfssihpjn');
  });
  await knex.schema.alterTable('ccnpnwtwed', function(table) {
    table.integer('zjixusvupq');
    table.bigInteger('nzfcbjurxn');
    table.text('xxvqlrmrvt');
    table.string('iwmzjxlvla');
    table.text('rhvtuahkrv');
    table.json('fmzqybjkhi');
  });
  await knex.schema.alterTable('pwkqujlbzi', function(table) {
    table.float('yrgjxgfmpz');
    table.boolean('ffqyyskysy');
    table.text('gfhcyzzbfl');
    table.integer('batiljsgzk');
    table.bigInteger('ffbvyjwsdw');
  });
  await knex.schema.alterTable('rguhgzbqhb', function(table) {
    table.text('zztqquqsks');
    table.string('mdtilitaqt');
    table.boolean('xzdgzhqnzc');
    table.json('dophzolgze');
    table.bigInteger('ewyexvbjcz');
    table.text('cxrherftcl');
    table.string('zkwrwlloji');
    table.text('efddfuhejn');
  });
  await knex.schema.alterTable('xrqekwltcr', function(table) {
    table.string('dogpfmbfwg');
    table.bigInteger('omlfllxluw');
    table.string('qljzwyqcvx');
    table.float('oxayexrbjt');
    table.bigInteger('junansutqi');
    table.integer('pptxrblecl');
    table.boolean('azmalnbsdo');
    table.boolean('vtqbtxomyh');
    table.float('djsaopnjoo');
    table.boolean('tpnylnozjh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};