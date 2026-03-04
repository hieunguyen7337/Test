'use strict';

/**
 * Migration: 20240809010552_spazbtlslguzppc
 * Description: Redo the undo
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ubcstlvrdu', function(table) {
    table.timestamp('zuqynvfaxd');
    table.string('iragbbigin');
    table.boolean('xudbbvkuvz');
    table.string('lulmxpctoe');
    table.json('ztpgbgomkb');
    table.string('ooffwjaviq');
  });
  await knex.schema.alterTable('lduykdpxsw', function(table) {
    table.timestamp('nqgtprxgwy');
    table.timestamp('utudlqrxlw');
    table.boolean('pnoeubvijg');
  });
  await knex.schema.alterTable('fzfxnksupg', function(table) {
    table.integer('qcrekgmzvy');
    table.json('enlawnqsjd');
    table.boolean('evgcepxmtp');
  });
  await knex.schema.alterTable('nhbfdwhavm', function(table) {
    table.bigInteger('kdualkhsnr');
    table.text('jcvufltkex');
    table.string('wosecdvbxg');
    table.timestamp('cysuovbyev');
  });
  await knex.schema.alterTable('cmyiinxkbi', function(table) {
    table.text('fmjzkyimyl');
    table.json('qqacstyqps');
    table.integer('lsdlnmvtad');
    table.json('mmkbuvjbuc');
    table.text('agshnatyyu');
    table.bigInteger('jdbufngzfj');
    table.text('pvubxksqyy');
    table.string('uuhjgxilni');
    table.integer('rmuihzlqxr');
    table.integer('mclxtmrmkg');
  });
  await knex.schema.alterTable('sqpzdlmeab', function(table) {
    table.timestamp('ivmbypzzub');
    table.bigInteger('lxlzhdozwm');
    table.timestamp('netpfaddvi');
    table.timestamp('uvvqjhbbuo');
    table.boolean('gookhhhfbo');
  });
  await knex.schema.alterTable('jupllxjwlq', function(table) {
    table.boolean('yblgzkaegv');
    table.string('gqraembctw');
    table.text('hpkcehkeug');
    table.string('emgumomexb');
    table.string('tfthtusywm');
  });
  await knex.schema.alterTable('ukpdoaxzgg', function(table) {
    table.bigInteger('ubsvxengyn');
    table.timestamp('nzejtuakbb');
    table.json('gsatrweupo');
    table.timestamp('yothnkdwsp');
    table.integer('ghgghbvdos');
    table.integer('gqlnhefjku');
  });
  await knex.schema.alterTable('sckqytlmhf', function(table) {
    table.timestamp('byjlovnozu');
    table.json('hzgjdlrlym');
    table.integer('lzvxsfpnvt');
    table.integer('kntlxrophy');
    table.text('ifnxlfyrpy');
    table.bigInteger('mkjgapkgjo');
    table.text('jagbyswxvx');
  });
  await knex.schema.alterTable('gjjjgdpzfu', function(table) {
    table.string('xlnffbhgxz');
    table.text('cahnpxkguf');
    table.timestamp('mvuetzinhf');
    table.boolean('kgjsmuqmof');
    table.timestamp('mjbavlinut');
    table.text('irkmvljfep');
    table.text('nrycljnusg');
    table.float('xxzbwytqyl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};