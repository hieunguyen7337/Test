'use strict';

/**
 * Migration: 20241018003600_wabdgpzcjxkhysm
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('apqbxlcsvc', function(table) {
    table.timestamp('babsicduua');
    table.string('jcubavqmuf');
    table.integer('ycvzpxnbox');
    table.float('vpepsbxman');
    table.timestamp('ycgmyltnym');
    table.json('zppqywzops');
    table.boolean('msknneuhsb');
    table.timestamp('rgojazzyyp');
    table.float('xjdayehldc');
    table.string('gtqqvmqfvm');
  });
  await knex.schema.alterTable('zfnuwkaeau', function(table) {
    table.text('nxszqfmjil');
    table.json('oyspwjsjxy');
    table.boolean('axykrrgsml');
    table.json('occitxicgy');
    table.text('pjxbxzecoj');
    table.json('wwuvpjhcrn');
    table.boolean('xkodebgzbf');
  });
  await knex.schema.alterTable('cwhzgkijix', function(table) {
    table.boolean('hkpyxqtnrz');
    table.boolean('uxzqntmrpg');
    table.integer('ndeiwlibkg');
    table.json('dvogrexveq');
    table.string('lopqfkpvzf');
    table.timestamp('rmsesyjrqu');
    table.json('jawiszwqmb');
    table.boolean('fjffkzxzfa');
    table.integer('yvaqoohgqd');
  });
  await knex.schema.alterTable('bxyrhbxcyh', function(table) {
    table.timestamp('yofsddsabi');
    table.bigInteger('hilggxrdzh');
    table.timestamp('kblyinpkrz');
    table.string('ocrhpfjdbh');
    table.string('gyhsttsyfi');
    table.bigInteger('fjbiayyypi');
    table.integer('epgooamill');
    table.json('lnhfryagww');
    table.text('oeranvxqdy');
    table.text('opsvbdixll');
  });
  await knex.schema.alterTable('dkcwqigrud', function(table) {
    table.boolean('pyzmlbapgh');
    table.json('jxknnidpki');
    table.json('lkibluwhxy');
    table.string('mybrhyungw');
    table.text('srhodephus');
  });
  await knex.schema.alterTable('vmuyahuiiu', function(table) {
    table.float('fzfppwmcqt');
    table.integer('gnsejvdvlr');
    table.string('bpfkpjzprd');
    table.bigInteger('fcswjqxqsr');
    table.timestamp('fswsimwggp');
  });
  await knex.schema.alterTable('gkpnzlrvyk', function(table) {
    table.bigInteger('rwrkwidbyn');
    table.string('lfcucwbvbt');
    table.text('rslzdcnatr');
    table.timestamp('irvbiaizsu');
  });
  await knex.schema.alterTable('zognhvpilu', function(table) {
    table.text('qwiukuhcwj');
    table.boolean('krsqmyrcqr');
    table.timestamp('sdjfktyesn');
    table.timestamp('dqhzcahzgk');
    table.json('youokeocbt');
    table.boolean('yfzbarjqyl');
    table.text('fwjtizabot');
  });
  await knex.schema.alterTable('vqcxxaurub', function(table) {
    table.text('hjxdsrtnmi');
    table.text('ythorlahhq');
    table.integer('xcpejujtwn');
    table.timestamp('nagntxmasq');
    table.bigInteger('pfqopqmwuz');
    table.timestamp('ptmatqnilf');
  });
  await knex.schema.alterTable('obamqwwxab', function(table) {
    table.bigInteger('pcpmdpcxyh');
    table.json('gogdrxrres');
    table.timestamp('wazhywsbfa');
    table.text('elgurobicq');
    table.bigInteger('kvsiuqsuyk');
  });
  await knex.schema.alterTable('kcjqjnnnnc', function(table) {
    table.bigInteger('vjtiytgbbn');
    table.float('miflzibujk');
    table.json('gipxkemkod');
    table.bigInteger('upkuqwyxut');
    table.json('drjtoeogka');
    table.boolean('tbotcwvzyc');
    table.string('lgqlwyxfii');
    table.float('slzyxchsdr');
    table.integer('kjdlatgjkk');
    table.json('sxqzxaogjy');
  });
  await knex.schema.alterTable('mvelxnmvni', function(table) {
    table.json('vbvvrkvlsn');
    table.integer('uxqfyeagjb');
    table.float('sxurruirrx');
    table.timestamp('vmxcihwdin');
    table.float('ruucnhwdlr');
    table.json('wajzpszdxr');
    table.json('tnpghxkyhw');
    table.string('ycdwhdlden');
    table.text('awkdjsqzrr');
    table.string('lspbqnlvjc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};