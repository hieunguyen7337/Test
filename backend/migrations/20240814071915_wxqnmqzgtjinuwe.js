'use strict';

/**
 * Migration: 20240814071915_wxqnmqzgtjinuwe
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('clvjniaaow', function(table) {
    table.timestamp('kfjvywtxqw');
    table.bigInteger('cfzfwyfapg');
    table.boolean('dpqgsbnfhn');
  });
  await knex.schema.alterTable('fypkaonvqz', function(table) {
    table.bigInteger('hzdndycpnx');
    table.boolean('gjyklvyvza');
    table.text('faffsilkky');
    table.boolean('pjawvvasiu');
    table.timestamp('risfwxjwwz');
    table.float('tknxfyladh');
  });
  await knex.schema.alterTable('cbxthbmylo', function(table) {
    table.integer('stqjcyfzut');
    table.json('vdaiqiwamv');
    table.integer('pfxvzeolxz');
    table.timestamp('qysquwmtxp');
    table.float('snnahgtdht');
    table.float('xafmhddenh');
  });
  await knex.schema.alterTable('iloygtvwtz', function(table) {
    table.float('svtfvpktid');
    table.boolean('scjonhfehr');
    table.boolean('djaawvyslo');
    table.string('qrbmhgszcd');
    table.float('qyzyxqujfi');
    table.text('nyorczukna');
  });
  await knex.schema.alterTable('aeekfxobhr', function(table) {
    table.json('cpaxeyfbso');
    table.integer('wkamuiamkc');
    table.text('hjdkeqztvx');
    table.bigInteger('jeecnjxzqo');
    table.text('xhyvjeqlbp');
    table.float('sbzubjdlvl');
    table.string('lyozudvihe');
    table.json('ymptjkbicy');
    table.bigInteger('temyzgnsba');
  });
  await knex.schema.alterTable('wngmnwbqvr', function(table) {
    table.json('vcgfwxrmrn');
    table.timestamp('jlbgtiejtx');
    table.text('jcwoimiqij');
    table.float('dliljedcjg');
    table.integer('cqanjmdaap');
    table.bigInteger('inivsqdpwn');
  });
  await knex.schema.alterTable('pkiwoilmue', function(table) {
    table.float('hltotrtset');
    table.timestamp('fyhswrgdvl');
    table.timestamp('vnwrmzjqqq');
    table.text('hjmekicwib');
    table.float('kvvjyyxizh');
    table.integer('lyxuqtkrcg');
    table.timestamp('vzryvxoexv');
    table.boolean('cydqvwwkkn');
  });
  await knex.schema.alterTable('iafefbaduw', function(table) {
    table.json('jfswpigngc');
    table.bigInteger('ghzophnska');
    table.json('dzyjmeyhrc');
    table.json('qjavfwhiod');
    table.boolean('lqvanhhbmh');
    table.timestamp('nywoqvmoiw');
    table.string('oumtgrksny');
  });
  await knex.schema.alterTable('jlsjceddmv', function(table) {
    table.bigInteger('xxhtvmxdov');
    table.boolean('rgfuuqcenc');
    table.text('kmttdeujhy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};