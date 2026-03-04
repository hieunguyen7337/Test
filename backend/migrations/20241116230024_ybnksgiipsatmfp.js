'use strict';

/**
 * Migration: 20241116230024_ybnksgiipsatmfp
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rjnorqohem', function(table) {
    table.timestamp('atoqpuioim');
    table.timestamp('nmtbineelh');
    table.timestamp('hgckqxwgvn');
    table.integer('tvutyvyrpw');
    table.json('wsthufttwq');
  });
  await knex.schema.alterTable('fcslaoxwad', function(table) {
    table.text('iahlkvyhrt');
    table.float('kzkyowcxor');
    table.integer('jynjkwxqau');
    table.timestamp('zxuvihsmaz');
    table.json('htiulfevgn');
    table.bigInteger('auvfdgctmk');
    table.boolean('kxioipcwqc');
    table.timestamp('svnlnpxjiu');
    table.boolean('kxfvhqrrjd');
  });
  await knex.schema.alterTable('qmihboreaf', function(table) {
    table.json('ittqdvkpkk');
    table.text('jqlsoapjkl');
    table.timestamp('qjnyuqziwh');
    table.boolean('antyweuigx');
    table.boolean('ueyjvcwwav');
    table.string('emlqnnoryk');
    table.bigInteger('knmztgrwkb');
    table.timestamp('pahdbdqaak');
    table.string('odwlnrjmym');
  });
  await knex.schema.alterTable('ruvstssyst', function(table) {
    table.boolean('byfbblfohl');
    table.timestamp('miywpsbhdz');
    table.bigInteger('twmlckhljm');
    table.integer('zdglydzdod');
    table.boolean('kjtaubpjvr');
    table.json('hoycdohtjx');
    table.bigInteger('fppfumskic');
    table.boolean('oigkrbxdta');
    table.boolean('qaprwmhqiv');
  });
  await knex.schema.alterTable('kshglfrfno', function(table) {
    table.bigInteger('ldodzsuskj');
    table.integer('oneuuyxcas');
    table.boolean('ezrirqyawg');
    table.text('minmyvfspg');
    table.integer('rzzedobner');
    table.boolean('eejwgbgpyq');
    table.bigInteger('prrvqzxuav');
    table.integer('ixgoeftxxh');
    table.text('rzrxtwcufk');
    table.float('nvvohwkbbl');
  });
  await knex.schema.alterTable('hsixccoaeg', function(table) {
    table.json('mmksibydhj');
    table.bigInteger('bhinzviwaq');
    table.bigInteger('xelohqwfyz');
    table.bigInteger('wrlvwpcvda');
    table.boolean('boyhvqnzqn');
  });
  await knex.schema.alterTable('ttmacxpznl', function(table) {
    table.text('tbnxmpvlgz');
    table.integer('xktjncmjla');
    table.integer('doydowsesu');
    table.boolean('yqdzoyjryu');
    table.float('zsttywdsbr');
    table.timestamp('tjemhihsio');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};