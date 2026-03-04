'use strict';

/**
 * Migration: 20240602223327_qvdviaqwaunrooo
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yqndqtckcd', function(table) {
    table.bigInteger('zmockzdpmj');
    table.text('zbcmsnvtvd');
    table.json('hnskfzfaee');
    table.json('fzwszjsyur');
    table.json('aqspstmivs');
    table.boolean('hkwbqdyded');
    table.bigInteger('zbvrxhyqbq');
    table.float('dxkirstras');
    table.bigInteger('euuqzfnphj');
  });
  await knex.schema.alterTable('usepcdkuaq', function(table) {
    table.integer('oqlphygdhc');
    table.float('owfxtztswn');
    table.boolean('leqexyxdtx');
  });
  await knex.schema.alterTable('ovyxwzzoyc', function(table) {
    table.json('gafpswxfzy');
    table.boolean('gdngkyfaud');
    table.integer('rzfdgfzxmj');
    table.boolean('mttamzxfbd');
    table.float('lptrxzadli');
    table.float('ghxgyanlrf');
    table.text('ystrmbqzxg');
    table.bigInteger('nuqmzpqlij');
    table.string('blwdjirosi');
  });
  await knex.schema.alterTable('sbckjhhujx', function(table) {
    table.timestamp('wicavkkkpo');
    table.bigInteger('vlceiwigus');
    table.json('uhxnpoqibf');
    table.json('bsbypgceut');
    table.integer('eftvwekwwp');
    table.float('clvtpkssrz');
    table.float('vzixxxpbmc');
  });
  await knex.schema.alterTable('jvhqlxqzrz', function(table) {
    table.bigInteger('napgsxbszs');
    table.integer('anmlxhnrec');
    table.string('oqgyoyouvy');
    table.float('rydckoxjls');
    table.json('pohncerqjt');
  });
  await knex.schema.alterTable('kjwmgotipb', function(table) {
    table.timestamp('bgzjdjsqlp');
    table.integer('yyqesckmgm');
    table.boolean('vzevhbrsbx');
    table.boolean('hhwjqoeumy');
    table.bigInteger('llizkxolnh');
    table.json('hmxlfdspdf');
    table.integer('kpyydvptgp');
    table.timestamp('nyfedpmufc');
    table.boolean('pepvsypzds');
    table.float('amzcmxstak');
  });
  await knex.schema.alterTable('ocxazydwkw', function(table) {
    table.bigInteger('qhwdgpijqu');
    table.float('bcbwrgjiwh');
    table.float('rnmwxspdmg');
    table.timestamp('acepydbpmp');
    table.bigInteger('akqamszjke');
    table.boolean('dacilxbwyt');
    table.integer('rgzsrolius');
    table.json('ilwdksofaa');
    table.timestamp('juyjmuijoh');
    table.float('wboazccnpl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};