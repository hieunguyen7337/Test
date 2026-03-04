'use strict';

/**
 * Migration: 20240103234851_dcltnxdicghpqyg
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ryewvyoqas', function(table) {
    table.string('mvwexyilgk');
    table.string('hfvmgglbme');
    table.integer('ynehqtdzjp');
    table.text('zcdszpudyo');
    table.boolean('covklarywr');
    table.json('dshfqbqgnw');
    table.float('ajhzgpefpi');
    table.integer('npxdqnsfva');
    table.json('pyisebpyrc');
    table.bigInteger('pnhjgktddz');
  });
  await knex.schema.alterTable('objzfdizky', function(table) {
    table.string('jlyjqmuaou');
    table.integer('ygbsbpmbsd');
    table.bigInteger('jtilcqstdh');
    table.timestamp('mnxjnkaswz');
    table.boolean('fiyrdklweg');
    table.json('ociekrlote');
    table.json('hogiqpivpc');
    table.text('qlzlylnaym');
  });
  await knex.schema.alterTable('rjgaodlgyb', function(table) {
    table.integer('gwqyacsmuc');
    table.boolean('mqlxpzooqj');
    table.float('lthuezeahn');
    table.string('quunbbhqet');
    table.timestamp('wpccmzpaqy');
    table.bigInteger('zhqtbdomfq');
    table.bigInteger('ftxuokydmk');
    table.integer('bbbuzjdmdd');
    table.boolean('hklriomneh');
  });
  await knex.schema.alterTable('dlrhwrscse', function(table) {
    table.timestamp('rxspqluwco');
    table.integer('gfrufklpsk');
    table.timestamp('xjkqplvvca');
    table.string('xltgesbujn');
    table.boolean('dyxebvdecz');
    table.float('dsbzzrpxdl');
    table.boolean('udiaenhxko');
    table.bigInteger('krkcmhozdj');
  });
  await knex.schema.alterTable('dinyuvykvx', function(table) {
    table.text('pnxmknrexj');
    table.boolean('izwkrhqrxw');
    table.string('bgohjkftgc');
    table.json('liycbhnwom');
  });
  await knex.schema.alterTable('pmmycjqidx', function(table) {
    table.boolean('udazbloxzk');
    table.string('hdxmclojnh');
    table.boolean('zajxglqzfx');
  });
  await knex.schema.alterTable('lkaqlwtliq', function(table) {
    table.timestamp('mgdputqmuc');
    table.text('vdrywgusbq');
    table.json('ddwxuxchrl');
    table.bigInteger('oktpuwudvr');
    table.boolean('iujgnyypes');
    table.json('ignvveqwjn');
    table.text('niedkmfemj');
  });
  await knex.schema.alterTable('khlqkyxren', function(table) {
    table.bigInteger('ofddgajnqr');
    table.bigInteger('eziupenyom');
    table.float('haxkmncznr');
    table.integer('uiowzcwgos');
    table.string('rhbjexpyjz');
    table.boolean('bocrkhygdv');
    table.string('xnbcovodgq');
  });
  await knex.schema.alterTable('japjmjfqbc', function(table) {
    table.integer('dliouminqw');
    table.json('nycfnuvklp');
    table.timestamp('glhrqdzpcn');
    table.bigInteger('qrcsvjkirp');
    table.string('vtcghbzdfp');
    table.float('qlqamaefpz');
    table.json('udnfmohqzp');
    table.json('ufppxnmohw');
  });
  await knex.schema.alterTable('judajzbzrc', function(table) {
    table.text('rxqbfnasim');
    table.text('qvvrgiskyr');
    table.text('wtjfoqnzsh');
    table.timestamp('pflcqdyqgr');
    table.json('mhoxvkcalq');
    table.bigInteger('cvnxwinkns');
    table.timestamp('egbdqagdyh');
    table.timestamp('rrnjnbwhpc');
    table.string('gweutrnbxd');
  });
  await knex.schema.alterTable('zkmprwozwn', function(table) {
    table.boolean('isigjmwreh');
    table.float('cyzheflhec');
    table.boolean('bghtkpvljn');
    table.bigInteger('cbyvtenhwm');
  });
  await knex.schema.alterTable('hgvfnbwguy', function(table) {
    table.json('tlehjosuum');
    table.text('khqugqbnpd');
    table.bigInteger('diajavfysz');
    table.string('pisahpepgz');
    table.timestamp('tcfhcvgwtv');
    table.string('yojwqmnpoo');
    table.boolean('jixirrzlaw');
    table.json('fkjgdhaidg');
    table.bigInteger('tuslihjaso');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};