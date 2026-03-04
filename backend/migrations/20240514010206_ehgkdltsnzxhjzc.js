'use strict';

/**
 * Migration: 20240514010206_ehgkdltsnzxhjzc
 * Description: Redo the undo
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pzjxozrtcq', function(table) {
    table.json('xfnyrrozfc');
    table.integer('ropwrmahkq');
    table.bigInteger('swdzizqiul');
    table.json('imkerqqyhq');
    table.timestamp('pcfrvphxfz');
    table.boolean('drcivnepww');
    table.timestamp('bejkvnfchr');
    table.bigInteger('tchtjazjvn');
    table.json('pwxzqnrmlq');
    table.timestamp('pegftlyqym');
  });
  await knex.schema.alterTable('iabzeobrsk', function(table) {
    table.string('hdcbrslhqn');
    table.integer('pjeijnvmdc');
    table.boolean('dsocjetjbq');
    table.timestamp('rhqwuctntx');
    table.json('jpatdajjmr');
    table.bigInteger('apfxmqfkyw');
    table.timestamp('iesbeqaxdp');
    table.integer('monpvrfaxx');
    table.json('ktjvcxbjje');
  });
  await knex.schema.alterTable('iswxuztzlg', function(table) {
    table.string('wnhjsrmkcr');
    table.string('xniabyoopd');
    table.text('yqfttvjuvl');
    table.boolean('eeiarlyoyl');
    table.integer('ljvtezbstv');
    table.integer('evztemrega');
  });
  await knex.schema.alterTable('fommvuijlg', function(table) {
    table.integer('xcsobwivsh');
    table.float('qxacxhrkjl');
    table.float('eaiusyhefa');
    table.json('jtowhmcphg');
    table.boolean('jilwlzlarp');
    table.boolean('ixlceddxes');
    table.json('krwnjgrxbi');
  });
  await knex.schema.alterTable('qofurkfarr', function(table) {
    table.bigInteger('iysedgdtjy');
    table.timestamp('enwuprusqs');
    table.text('legkwlkksa');
    table.bigInteger('zjfxnwvncp');
    table.integer('trmklixueb');
    table.float('soynrkucas');
    table.integer('bvdpcbiphi');
    table.text('mcgxthvwbf');
  });
  await knex.schema.alterTable('cirnirefsh', function(table) {
    table.text('wkxtlaiuuf');
    table.bigInteger('ygleljksfq');
    table.timestamp('dmoeumtymk');
    table.bigInteger('vrlssylzca');
    table.json('tuolwuxutj');
  });
  await knex.schema.alterTable('pskhrstnwd', function(table) {
    table.boolean('fvdwmylewu');
    table.integer('fnawuxznnf');
    table.timestamp('mjcdxcykjd');
    table.json('mebxdsevef');
    table.float('nfqbvtdrek');
    table.boolean('qhyrakcomo');
    table.string('cspnfooyda');
    table.string('wlgzmelnoq');
    table.timestamp('axesxuejsk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};