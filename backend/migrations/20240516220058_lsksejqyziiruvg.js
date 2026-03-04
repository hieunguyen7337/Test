'use strict';

/**
 * Migration: 20240516220058_lsksejqyziiruvg
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ixapuyxcvs', function(table) {
    table.json('fmtadigowb');
    table.json('pyjpqhvulm');
    table.bigInteger('gnwimwishw');
  });
  await knex.schema.alterTable('bhchdjtqig', function(table) {
    table.timestamp('zkeqnijbkj');
    table.text('qehovkjevi');
    table.integer('uqzcmgjisv');
    table.bigInteger('yrpuhvkcbu');
  });
  await knex.schema.alterTable('vxsahmxrse', function(table) {
    table.string('sjwmgkfvss');
    table.string('cscmaetzpd');
    table.string('zunswaxebn');
    table.text('nxnnysxiwc');
    table.json('rjgwzdcgeo');
    table.float('gczsmvekzq');
    table.float('ujdtwfalqi');
    table.bigInteger('jkbglkaoho');
  });
  await knex.schema.alterTable('gpoiwntuvp', function(table) {
    table.text('nysaprmpij');
    table.string('rbwhgslpyd');
    table.bigInteger('mbdwdtphmd');
    table.integer('unvcpcernc');
    table.float('ivzgsxembg');
    table.json('pqcizahfbv');
    table.text('vcozfhozao');
  });
  await knex.schema.alterTable('qecekzouqz', function(table) {
    table.text('oizdddrmdy');
    table.boolean('kvxnxrtqzb');
    table.timestamp('ihszpnbgrm');
    table.bigInteger('kuhqgpopfz');
    table.timestamp('vtxewhlkxf');
    table.timestamp('ooquqlxcjz');
    table.string('mvtthhkoga');
    table.text('luwhywgkrt');
    table.string('mbqquvodin');
    table.json('yyvuwtbaji');
  });
  await knex.schema.alterTable('wnahjieipv', function(table) {
    table.float('mnoeakasjt');
    table.float('hwktcfwvbb');
    table.json('jroukbdkqc');
    table.timestamp('pnfcpygrea');
    table.integer('ypdawyhgrc');
    table.boolean('vbeiuhnkpg');
    table.json('hiduqasjzn');
    table.float('hzuuyfuncq');
  });
  await knex.schema.alterTable('mzckxatibd', function(table) {
    table.boolean('gufprsbbsd');
    table.json('hbjcckaqin');
    table.boolean('cxnuzpusoe');
    table.text('muvbvjxucg');
  });
  await knex.schema.alterTable('vfnunrjfou', function(table) {
    table.timestamp('ifmfcgpuhm');
    table.timestamp('fzuzwzkxtk');
    table.integer('encijytfnq');
    table.json('kzbuobpfps');
    table.text('tkixfdwtuf');
    table.integer('mdqzgmbxtw');
    table.json('brxkclqnuz');
  });
  await knex.schema.alterTable('mflgesyvqw', function(table) {
    table.boolean('rkejpqyald');
    table.boolean('vieocxwegx');
    table.integer('srcbuzvcre');
    table.float('kcpdmjptqf');
    table.bigInteger('qrwpfzszds');
  });
  await knex.schema.alterTable('jonaaholps', function(table) {
    table.bigInteger('zmiwzlzvlp');
    table.json('cpajovctbl');
    table.bigInteger('neyxmmzuay');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};