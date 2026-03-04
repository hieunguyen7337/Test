'use strict';

/**
 * Migration: 20241024191144_nshbwsbcjyogrkm
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qarfehzntm', function(table) {
    table.boolean('vewjnpemwa');
    table.timestamp('zweaxybtwe');
    table.float('grrxuulodz');
    table.bigInteger('mecqpdaozo');
    table.bigInteger('fzcqkfkekn');
  });
  await knex.schema.alterTable('syjrwljcnr', function(table) {
    table.text('nbktbljayk');
    table.text('umeuqfmeet');
    table.string('aledzmqluj');
  });
  await knex.schema.alterTable('bdltjffcmn', function(table) {
    table.bigInteger('rxrdveeejb');
    table.bigInteger('exodbjjife');
    table.boolean('bzjnjcaynh');
    table.boolean('tnfahibcjt');
    table.integer('txfxnrwskg');
    table.string('epunthjett');
    table.boolean('crugzjmpyt');
    table.timestamp('fkloeljvvl');
  });
  await knex.schema.alterTable('xjibfphuug', function(table) {
    table.integer('ptlqtpgkvt');
    table.boolean('kldjrohdvg');
    table.timestamp('ysfojhlssj');
    table.integer('lzgnqvefjo');
    table.bigInteger('pqsyzequoz');
    table.float('mvgzvbyoea');
    table.text('rkpsdgwpum');
    table.timestamp('pmgwtchrdg');
    table.string('yqrcpbxmfr');
    table.string('ktqwtcwvrb');
  });
  await knex.schema.alterTable('nffvonvzqy', function(table) {
    table.bigInteger('dodtxjkbet');
    table.text('amflqfbfga');
    table.integer('lncyiechkf');
    table.bigInteger('lbfmfbtwut');
  });
  await knex.schema.alterTable('lhqsqsnehj', function(table) {
    table.float('rpqoahvpff');
    table.string('kvydmeoheh');
    table.timestamp('evvgvcpktl');
    table.bigInteger('kvqhfhhkmp');
    table.integer('prikhjqltc');
    table.string('ryjmyxaals');
    table.json('izngitaows');
    table.integer('jwrkeeufnw');
  });
  await knex.schema.alterTable('evgjvdizkd', function(table) {
    table.string('ajihhjfzhz');
    table.json('nwexonfzzs');
    table.float('iajehzbtny');
    table.integer('ewllodhohe');
    table.boolean('ydgtrtnftp');
    table.boolean('bigbtzbdej');
    table.json('drbdhnojtm');
    table.text('gnjpafemln');
  });
  await knex.schema.alterTable('efkawlzbut', function(table) {
    table.string('ruogdllzgc');
    table.boolean('qthbkwkolt');
    table.bigInteger('odhascxvxd');
    table.integer('zxprjlhsbx');
    table.bigInteger('bmhrlpwbdy');
    table.bigInteger('plhhelmarb');
    table.text('suwhhpyvwg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};