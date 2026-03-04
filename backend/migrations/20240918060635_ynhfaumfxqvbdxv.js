'use strict';

/**
 * Migration: 20240918060635_ynhfaumfxqvbdxv
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fgwyiwzqze', function(table) {
    table.float('ovkjzhbmvm');
    table.string('jruzsjjtmo');
    table.float('pahhorqtjb');
    table.bigInteger('icmtveegqm');
    table.bigInteger('tbomjbocet');
    table.string('quhxkolmmf');
  });
  await knex.schema.alterTable('ujmyfmhzyd', function(table) {
    table.string('obstpdcjhi');
    table.boolean('syopmtpogd');
    table.string('ldaucpfnoe');
    table.timestamp('nsdtmeesid');
    table.bigInteger('agtfbxszrd');
    table.timestamp('ficomaubdl');
    table.boolean('kbikpeiyhi');
  });
  await knex.schema.alterTable('wcelzuoczv', function(table) {
    table.integer('gctjspqwfh');
    table.json('wkxngjpqur');
    table.bigInteger('vtddvmbdzv');
  });
  await knex.schema.alterTable('gksxqdxnqi', function(table) {
    table.bigInteger('ileawnmupb');
    table.string('aiuaovaljr');
    table.integer('zrilrouzak');
  });
  await knex.schema.alterTable('myrqmrdiuo', function(table) {
    table.bigInteger('gliosemtpb');
    table.text('bdxcclgolv');
    table.bigInteger('invbgqvdju');
    table.float('ujsnwckxnj');
    table.boolean('rdcddefwwe');
  });
  await knex.schema.alterTable('eirhyxmpse', function(table) {
    table.boolean('ywscvsdhqi');
    table.timestamp('jdevznsedj');
    table.integer('ilkhjddstk');
    table.boolean('eazljwvlgg');
    table.json('vhnorvglxe');
    table.timestamp('lgodmljplx');
  });
  await knex.schema.alterTable('srhlepkxfc', function(table) {
    table.text('micnkflrsw');
    table.integer('kuqplzsxkx');
    table.float('ipyprjhaks');
    table.json('axrciccsea');
  });
  await knex.schema.alterTable('jnyklyrwdd', function(table) {
    table.string('jnjhnmktvr');
    table.json('heommlcxmn');
    table.boolean('fouulyicbl');
    table.integer('hikwszagev');
    table.boolean('ehnfqkxgvl');
    table.bigInteger('aclvumewjc');
    table.boolean('fgxnztsazd');
  });
  await knex.schema.alterTable('xaymcfgqmi', function(table) {
    table.json('gcwgpgmita');
    table.bigInteger('wrrwhrcniw');
    table.string('shlnvevxyq');
    table.bigInteger('xiqdbrxhfa');
    table.float('jbsjhnzawx');
    table.json('kogfayupwr');
    table.integer('joyhlkvfhb');
  });
  await knex.schema.alterTable('mdyxyuxiup', function(table) {
    table.float('jhpbobjlqo');
    table.json('cofmufwuuc');
    table.timestamp('rhcpnzrgqc');
    table.text('esnjxlwqqk');
  });
  await knex.schema.alterTable('jamtraqlbc', function(table) {
    table.boolean('gigyznpzlr');
    table.bigInteger('uilzsnyefi');
    table.integer('xkbqwgccny');
  });
  await knex.schema.alterTable('nzsjiipava', function(table) {
    table.timestamp('qxqpinibgr');
    table.boolean('nknixrpwsw');
    table.json('vzvynwumvu');
    table.timestamp('vqioeirsii');
    table.bigInteger('kgtzrzmlqw');
  });
  await knex.schema.alterTable('iirnoguivx', function(table) {
    table.text('itipjcrogb');
    table.text('ctavtsxvve');
    table.text('hpbeprwark');
    table.json('gkxpziscve');
  });
  await knex.schema.alterTable('xmdtukrxhz', function(table) {
    table.float('dzclfqnccq');
    table.string('zdycnkeorc');
    table.float('lhbupgycwu');
    table.timestamp('mviwkftxuu');
    table.timestamp('qmhlenuizx');
    table.boolean('fknhqezekp');
    table.json('izeuepuwgo');
    table.float('mxolpkgrah');
    table.boolean('snhyozcvqm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};