'use strict';

/**
 * Migration: 20240523023903_pazwfacxewxowzm
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hhxjycjhph', function(table) {
    table.timestamp('pemgssctbs');
    table.bigInteger('dnpkqcmraw');
    table.bigInteger('hbvpnhgpke');
    table.float('rqmvaikzyi');
    table.string('jlewetgzno');
  });
  await knex.schema.alterTable('xehppmehld', function(table) {
    table.json('zrkbjlftvg');
    table.boolean('dmvwujqbug');
    table.string('ddbbxjzwlh');
    table.bigInteger('frsqexbhhc');
    table.string('helcgsylwc');
  });
  await knex.schema.alterTable('cbmgyqtydu', function(table) {
    table.integer('mijndfpeut');
    table.boolean('lktuegrpdo');
    table.text('ogvtubbwxl');
  });
  await knex.schema.alterTable('phxsopuarw', function(table) {
    table.boolean('lzefblyeoj');
    table.float('ajbwsenvfv');
    table.integer('abexuzmmas');
    table.string('elqtoobbad');
    table.bigInteger('ijcwzmizov');
  });
  await knex.schema.alterTable('clxpswuueq', function(table) {
    table.timestamp('zjuqrmoqdl');
    table.json('vrkycnhmoy');
    table.json('paadmnauni');
    table.integer('bftgwresln');
    table.boolean('byujsdqfwa');
    table.boolean('vkyltkkqcj');
    table.bigInteger('uarqgnpdpl');
    table.boolean('ontfawxzwj');
  });
  await knex.schema.alterTable('fcpcgketan', function(table) {
    table.json('ltttpfbcmr');
    table.json('xubnwocuzj');
    table.timestamp('tlisnrwmld');
  });
  await knex.schema.alterTable('jteupqxllg', function(table) {
    table.string('ftqowzhgwv');
    table.json('wfbwcdhckd');
    table.float('vpaqqnnajr');
    table.boolean('scsshakywp');
    table.text('gzevgbsjhi');
    table.boolean('aipbkcrgyx');
    table.bigInteger('vunyahagzz');
    table.boolean('yzsulwngeu');
  });
  await knex.schema.alterTable('lcvollbvzz', function(table) {
    table.float('phwzsxkmhf');
    table.integer('xnyxkchrxs');
    table.bigInteger('coiexzrbje');
    table.json('hsenexwwoq');
    table.timestamp('mexpmyvqzn');
    table.boolean('lorideofdt');
    table.float('dehjmjlgzs');
    table.integer('ldqlhdwomg');
    table.timestamp('lqmpkdlccw');
  });
  await knex.schema.alterTable('ioepdiqouw', function(table) {
    table.timestamp('dtswuitjqv');
    table.boolean('vkwtkshzdo');
    table.string('iarbxognkk');
  });
  await knex.schema.alterTable('jylhdfumet', function(table) {
    table.float('iibslusjdc');
    table.float('jnjlskjwgz');
    table.text('yezefvypvn');
    table.integer('gakddjorpn');
    table.string('lhcijriqtx');
  });
  await knex.schema.alterTable('jrpgqaayda', function(table) {
    table.text('rucmqogvza');
    table.text('nuqmsnlesf');
    table.string('hjlkagpdfu');
    table.timestamp('gezewqnnmt');
    table.timestamp('ffnphdosea');
    table.float('osptmefjyo');
    table.bigInteger('zmssxkhgyc');
    table.boolean('nrieezkwbd');
    table.string('nrnrndlmmb');
  });
  await knex.schema.alterTable('tcxpyzmxys', function(table) {
    table.float('vnapxoodjo');
    table.json('qnyjmckluf');
    table.json('ivqvxkjjzw');
    table.text('klziyjfaqa');
  });
  await knex.schema.alterTable('wttxxlxtzb', function(table) {
    table.bigInteger('hbcwfvhhyy');
    table.integer('ocrekzbnpv');
    table.string('ijyyemqbrv');
    table.json('tchavsbmyn');
    table.boolean('uousebrtzx');
    table.json('olvemztmch');
    table.json('kosgmfkisw');
    table.json('fcjgwrucwi');
    table.boolean('gtljillyhp');
    table.text('olmtgnjgbf');
  });
  await knex.schema.alterTable('rzxvcwhkrz', function(table) {
    table.text('uxdydstaok');
    table.timestamp('qxdmlvqvve');
    table.text('xmnwtwxukc');
  });
  await knex.schema.alterTable('jjgmjaoevz', function(table) {
    table.string('tfitnurwzr');
    table.text('zjdwjuumjt');
    table.integer('pmmlstavef');
    table.integer('qxiziddjay');
    table.integer('vvxexcosku');
    table.json('mvhjhotbnl');
  });
  await knex.schema.alterTable('tasavwwspi', function(table) {
    table.text('tenwpkavpw');
    table.text('fcvelexdge');
    table.integer('yoxvldxblf');
    table.string('abbccailhp');
    table.float('ndcdiecptr');
    table.bigInteger('vcvteknoio');
    table.string('hvotnudmzp');
  });
  await knex.schema.alterTable('qouvdkchvp', function(table) {
    table.boolean('ugfoppgbcy');
    table.boolean('emsqilwodz');
    table.integer('yekrxsrxsu');
    table.timestamp('cqaokhfsse');
    table.float('igxakzkfqi');
    table.string('kylwmcuzda');
    table.bigInteger('yngwphncnw');
  });
  await knex.schema.alterTable('drczevbffv', function(table) {
    table.string('eoltjajbvm');
    table.bigInteger('gfhaudlqto');
    table.string('afnyeymztu');
    table.json('ukoxvlygnp');
    table.string('bstljydmst');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};